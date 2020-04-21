import { Layout } from 'antd';
import { LayoutCtx } from '../layoutContext';

/**
 * 头部组件
 * @returns {XML}
 * @constructor
 */
const MainHeader = ({title, subTitle = null, style = {}, mainLeftRender = null, mainRightRender = null, subLeftRender = null, subRightRender = null,subMenuRender = null }) => {
    const defaultStyle = {};
    return (
        <LayoutCtx.Consumer>
            {({leftMenuW}) => {
                return (
                    <div className="app-header">
                        <Layout.Header style={Object.assign(defaultStyle, style)}>
                            <div className="top font-14-bold-main">
                                header
                            </div>
                        </Layout.Header>

                        {/*language=SCSS*/}
                        <style jsx>{`
                            .app-header{
                                width: 100%
                            }
                        `}</style>

                    </div>
                )
            }}

        </LayoutCtx.Consumer>
    );
};

export default MainHeader;
