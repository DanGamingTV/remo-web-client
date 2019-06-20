const { serverPort } = require("./serverSettings");

const reCaptchaKey = "6Lfg_KYUAAAAAH1hvQdp-qDOUToVn6FQWFOvbySo";

const localHost = "http://localhost";
const host = localHost;

const api = "/api";
const apiUrl = `${host}:${serverPort}${api}`;
const socketUrl = `ws://localhost:${serverPort}`;

module.exports = {
  defaultRate: 1000, //Message rate limit for most people
  minRate: 250, //Message rate limit for admins / server owners etc..
  slowMo: 30000, //Message rate limit for when we need to slow things down!
  reCaptchaSiteKey: reCaptchaKey,
  socketUrl: socketUrl,
  apiUrl: apiUrl,
  apiAuth: `${apiUrl}/auth`,
  apiSignup: `${apiUrl}/signup`,
  apiLogin: `${apiUrl}/login`,
  listRobotServers: `${apiUrl}/robot-server/list`,
  addServer: `${apiUrl}/robot-server/create`,
  addChannel: `${apiUrl}/channels/create`,
  deleteChannel: `${apiUrl}/channels/delete`,
  addRobot: `${apiUrl}/robot/setup`
};
