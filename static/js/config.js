// env的格式不要变，打包的时候会读取格式替换成环境变量
// 环境变量的value不要写计算表达式，要直接写值
const env = {
  BASE_HOST: 'https://site-x.761242.com',
  BASE_ACCOUNT_HOST: 'https://account-x.761242.com', // 登录模块域名
  CONFIG_URL: 'https://api.761242.com/xjs/config.js', // 配置文件地址
};

// 将环境信息挂载到window.situoyun.env上,并做兼容处理
window.situoyun = window.situoyun || { env: {} };
window.situoyun.env = Object.assign(window.situoyun.env, env);

function configSuccess() {
  // config配置上有basic_alias，就将其作为title生效
  if (
    window.situoyun.config &&
    window.situoyun.config.basic_alias &&
    window.situoyun.env
  ) {
    window.situoyun.env.APP_TITLE = window.situoyun.config.basic_alias;
  }
}
// 除了window.situoyun.env部分场景还支持后端动态挂载脚本（只要不覆盖window.situoyun.env）
// 将读取的CONFIG_URL配置创建一个script标签插入到头部，该配置一般是由后端生成，结构为window.situoyun.config
if (window.situoyun.env.CONFIG_URL) {
  const head = document.head || document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.setAttribute('src', window.situoyun.env.CONFIG_URL);
  head.appendChild(script);
  if (document.all) {
    // IE
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        configSuccess();
      }
    };
  } else {
    script.onload = function () {
      configSuccess();
    };
  }
}
