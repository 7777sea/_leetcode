import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { EnumMainHeaderHeight, EnumMainSubHeaderHeight } from '../constants/EnumUI'
import css from 'styled-jsx/css';

/**
 * 内容组件
 */
const MainContent = ({ className = '', style = {}, isShowSubHeader = false, children, footer = null, right = null, ...rest }) => {
    const paddingNum = 0;
    const paddingSide = 12;
    const paddingBottom = 12;
    const marginTop = isShowSubHeader ? EnumMainHeaderHeight + EnumMainSubHeaderHeight: EnumMainHeaderHeight;
    let defaultStyle = {
        marginTop,
        paddingTop: paddingNum,
        paddingLeft: paddingSide,
        paddingRight: paddingSide,
        paddingBottom: paddingBottom
    };


    const {styles, className: mainClassName} = css.resolve`
        .main-content{
            /* height: 100%; */
            height: calc(100% - ${marginTop}px);
        }
    `

    return (
        <Layout.Content className={`${mainClassName} main-content ${className}`} style={Object.assign(defaultStyle, style)} {...rest}>
            <div className="container" id="container">
                <div className="content">
                    <div className='placeholder'></div>
                    <div 
                        className={`children-con ${footer ? 'no-bottom': '' }`} 
                        style={{
                            height:'calc(100% - 20px)', 
                            border: '1px solid #d9dfec', 
                        }}
                    >
                        {/* <DoScrollbars> */}
                            {children}
                        {/* </DoScrollbars> */}
                    </div>   
                </div>
                { right ? <div className="right">{right}</div> : null}
            </div>
            <div className='footer'>{footer}</div>
            {/*language=SCSS*/}
            <style jsx>{`
               :global(.main-content){
                 position:relative;
                   .container{
                        display: flex;
                        width: 100%;
                        height: calc(100% - ${footer ? ((marginTop - 60) > 0 ? (marginTop - 60) : 30 ) : 0}px); 
                        .content{
                            width: 100%;
                            overflow-x: hidden;
                            .no-bottom{
                                border-bottom: none!important
                            }
                        }
                        .placeholder{
                            height:10px
                        }
                        .right{
                            flex-shrink: 0;
                            height: 100%;
                            margin-left:10px;
                            overflow-y: auto;
                            background:#fff
                        }
                    }
                    .footer{
                          position:absolute;
                          bottom:0;
                          left:0px;
                          right:0px;
                          flex:1;
                     }
               }
                
            `}</style>

            {styles}
        </Layout.Content>
    );
};
MainContent.propTypes = {
    className: PropTypes.string,
    isShowSubHeader: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node
};

export default MainContent
