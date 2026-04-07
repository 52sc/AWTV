const CUSTOMER_SITES = {
    JS: {
        api: 'https://jszyapi.com/api.php/provide/vod/from/jsm3u8/',
        name: 'JS',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
