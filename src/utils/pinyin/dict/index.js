
// 只需要获取拼音首字母
export const dictDatabase = {
    // pinyin_dict_firstletter: require("./pinyin_dict_firstletter").default,
    pinyin_dict_notone: require("./pinyin_dict_notone").default
};

// // 只需要获取拼音不需要声调
// export const dictDatabase = {
//     pinyin_dict_notone: require("./pinyin_dict_notone").default
// };
//
// // 需要声调或者需要处理生僻字
// export const dictDatabase = {
//     pinyin_dict_withtone: require("./pinyin_dict_withtone").default
// };
//
//
// // 需要精准识别多音字, 但是字体库会比较大，不适合web加载
// export const dictDatabase = {
//     pinyin_dict_withtone: require("./pinyin_dict_withtone").default,
//     pinyin_dict_polyphone: require("./pinyin_dict_polyphone").default,
// };
