let redis = require("redis"); 
let {promisify} = require("util"); 
let client = redis.createClient();

const getAsync = promisify(client.get).bind(client);
const lpopAsync = promisify(client.lpop).bind(client);
const rpushAsync = promisify(client.rpush).bind(client);
const lrangeAsync = promisify(client.lrange).bind(client);
const llenAsync = promisify(client.llen).bind(client);
const quitAsync = promisify(client.quit).bind(client);

let test = async function () {

  await client.set("my_key", "Hello World using Node.js and Redis");
  let value = await getAsync("my_key");
  console.log(value)

 
  await rpushAsync('list','a');    //키 list에 a가 들어갑니다.
  await rpushAsync('list','b');    //키 list에 b가 들어갑니다.
  await rpushAsync('list','c');    //키 list에 c가 들어갑니다.
  await rpushAsync('list','d');    //키 list에 d가 들어갑니다.
 
  let len = await llenAsync('list');   //키 list의 길이를 출력합니다. 3 이 나옵니다.
  console.log(len)
  for (let i=0; i<len; i++) {
   let ret = await lpopAsync('list');
   console.log(ret)
  }
  
  await quitAsync();
}

test()
