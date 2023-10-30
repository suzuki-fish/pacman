const server_IP = '192.168.7.22:8000';
const local_IP = '127.0.0.1:8000';

const mazeDataList = [
  [
    [1, 1 ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 1,1,1, 1, 1,1],
    [1, 0, 0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0, 0,0,0,53,23,1],
    [1,21, 1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1, 0,1,1, 1,53,1],
    [1, 1, 1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1, 0,0,0, 0, 0,1],
    [1, 0, 0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1, 0,1,0, 1, 1,1],
    [1, 0, 1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0, 0,1,0, 0, 0,1],
    [1, 0, 1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1, 1,1,1, 1, 0,1],
    [1, 0, 1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0, 0,0,0, 0, 0,1],
    [1, 0, 0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1, 0,1,1, 1, 0,1],
    [1, 1, 1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,3,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1, 0,0,0, 1, 0,1],
    [1, 0, 0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1, 1,1,0, 1, 0,1],
    [1, 0, 1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0, 0,1,0, 1, 0,1],
    [1, 0, 0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1, 0,1,0, 0, 0,1],
    [1, 0, 1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1, 0,1,0, 1, 1,1],
    [1, 0, 1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1, 0,0,0, 0, 0,1],
    [1, 0, 1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1, 1,1,1, 1, 0,1],
    [1, 0, 1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0, 0,1,0, 0, 0,1],
    [1, 0, 0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1, 0,0,0, 1, 0,1],
    [1,54, 1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,52,1,0, 1, 0,1],
    [1,24,54,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,22,1,0, 0, 0,1],
    [1, 1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 1,1,1, 1, 1,1]
  ],
  [
    [1, 1,1,1,1, 1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 1, 1,1],
    [1, 0,0,0,0, 0, 1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0, 0,21,1],
    [1, 0,1,1,1, 0, 1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1, 1, 0,1],
    [1, 0,1,0,0, 0, 0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0, 0, 0,1],
    [1, 0,1,0,1, 1, 1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0, 1, 1,1],
    [1, 0,1,0,0, 0, 0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0, 0, 0,1],
    [1, 0,0,0,1, 1, 1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1, 1, 0,1],
    [1,54,1,0,1, 0, 0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0, 1, 0,1],
    [1,24,1,0,1, 0, 1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0, 1, 0,1],
    [1,54,1,0,0, 0, 1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0, 0, 0,1],
    [1, 0,0,0,1, 0, 0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,52, 1,1],
    [1, 0,1,0,1, 1, 1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,22,52,1],
    [1, 0,1,0,1, 0, 0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1, 1, 0,1],
    [1, 0,0,0,1, 0, 1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0, 0, 0,1],
    [1, 1,1,0,1, 0, 1,0,1,0,1,0,1,1,1,1,1,0,0,0,3,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1, 1, 0,1],
    [1, 0,0,0,0, 0, 1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0, 1, 0,1],
    [1, 0,1,1,1, 0, 1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0, 1, 0,1],
    [1, 0,1,0,0, 0, 0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0, 1, 0,1],
    [1, 0,1,0,1,53, 1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1, 1, 0,1],
    [1, 0,0,0,1,23,53,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0, 0,1],
    [1, 1,1,1,1, 1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 1, 1,1],
  ]
];

const startBtn = document.querySelector('#start');
startBtn.disabled = true;
let idNumber;
const characterImg = document.querySelector('.character_img');
const score = document.querySelector('.score');
const time = document.querySelector('.time');
let scoreNum = 0;
let timeNum = 60 * 3;
const optionStage = document.getElementById('select_stage');
// const optionGhost = document.getElementById('select_ghosts');
const optionSpeeds = document.getElementById('select_speeds');
const image = document.querySelectorAll('div[class$=_img]');
// let ghosts = [24,23,22,21];
const message = document.querySelector('.message');
const submit = document.querySelector('.submit');
let highCount = 0;
let lowCount = 0;
const level = document.querySelector('.level');
let usernamed;
console.log('動いてます');

//ユーザー検索、ゲストアカウントの作成
async function userSearch () {
  const textBox = document.getElementById('name');
  let username = textBox.value;
  submit.disabled = true;
  console.log('ｊだｐｆｊ');
    if (playStyle == 'guest') {
      try {
        const query = {
          username: username,
        }
        await fetch(`http://${server_IP}/api/createUser?username=${username}`,{
          // await fetch(`http://${local_IP}/api/createUser?username=${username}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(query),
          })
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              message.innerHTML = `${data.error}`;
              playStyle = 'guest';
            } else {
              message.innerHTML = `ユーザー「${data.username}」を作成しました。`;
              playStyle = 'named';
              usernamed = data.username;
            }
          })
          .finally(() => {
            submit.disabled = false;
          })
      } catch(error) {
        console.log(error);
      }
    } else if (playStyle == 'named') {
      try { 
        submit.disabled = true; 
         await fetch(`http://${server_IP}/api/searchUser?username=${username}`).then((response) => response.json()).then((data) => {
        //  await fetch(`http://${local_IP}/api/searchUser?username=${username}`).then((response) => response.json()).then((data) => {
            console.log(data);
            message.addEventListener('click',() => {
              textBox.value = data[0].username;
            })
            if (username == data[0].username) {
              message.innerHTML = `ようこそ「${data[0].username}」さん。startを押してゲームを始めてください。`;
              startBtn.disabled = false;
              usernamed = data[0].username;
            } else {
              if (textBox.value != '') {
                message.innerHTML = `もしかして${data[0].username}`;
              } else {
                message.innerHTML = `入力してください`;
              }
              startBtn.disabled = true;
            }
            return idNumber = data[0].id;
          }).catch(() => {
            startBtn.disabled = true;
            console.log(`「${username}」は見つかりませんでした。`);
            message.innerHTML = `${username}は見つかりませんでした。`;
          })
          submit.disabled = false;
      } catch(error) {
        console.log(error);
      }
     
    }
}

const fastContent = document.querySelector('.top');
let playStyle;

//playStyleの変更(アカウントを作成してやるか、入場した時に作成したアカウントでやるか)
function chengeUser(num) {
  if (num == 1) {
    playStyle = 'guest'; //アカウント作成します
  } else {
    playStyle = 'named'; //名前入力します
  }
  fastContent.style.display = 'none';
}


//スタート押したら実行
function addEvent() {
  image.forEach(img => {
    img.style.opacity = 1;
  })

  const title = document.querySelector('.title');
  let id = optionStage.value;
  let countDownNumber = 5;
  const mazeData = mazeDataList[id];
  startBtn.disabled = true;

  const numRows = mazeData.length;
  const numCols = mazeData[0].length;
  // let numbers = optionGhost.value;
  // const array = ghosts.slice(parseInt(numbers));
  const gameSet = document.querySelector('.game_set');

  const mazeTable = document.getElementById('maze');
  const countDownBoard =  document.querySelector('.count_down');
  title.classList.add('close');

  //最初のカウントダウン
  countDownBoard.classList.remove('close');
  const countDown = setInterval(() => {
    if (countDownNumber == 1) {
      clearInterval(countDown);
      countDownBoard.classList.add('close');
    } else {
      countDownNumber--; 
    }
   countDownBoard.querySelector('span').innerHTML = countDownNumber;
  }, 1000);

  //ゴーストの数
  // function ghostSet(num) {
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] == num) {
  //       return 1;
  //     }
  //   }
  // }

  // 迷路の描画
  for (let row = 0; row < numRows; row++) {
    const newRow = mazeTable.insertRow();
    for (let col = 0; col < numCols; col++) {
      const newCell = newRow.insertCell();
      if (mazeData[row][col] === 1 || mazeData[row][col] === 52 ||mazeData[row][col] === 53 ||mazeData[row][col] === 54 ) { //壁
        newCell.classList.add('wall');
      } else if (mazeData[row][col] === 21 || mazeData[row][col] === 22 || mazeData[row][col] === 23 || mazeData[row][col] === 24) { // ゴースト
        // if (ghostSet(mazeData[row][col]) == 1) {
            let ghostImg,ghostRect;
            let num = 0;
            if (mazeData[row][col] === 21) {
              num = 21;
            } else if (mazeData[row][col] === 22) {
              num = 22;
            } else if (mazeData[row][col] === 23) {
              num = 23;
            } else if (mazeData[row][col] === 24) {
              num = 24;
            } 
            newCell.classList.add(`ghost${num}`);
            ghostImg = document.querySelector(`.ghost${num}_img`);
            ghostRect = document.querySelector(`.ghost${num}`).getBoundingClientRect();
            ghostImg.style.top = `${ghostRect.top}px`;
            ghostImg.style.left = `${ghostRect.left}px`;
        // } else {
        //   newCell.classList.add('new_point');
        //   const point = document.createElement('div');
        //   point.classList.add('point');
        //   point.classList.add('normal');
        //   mazeData[row][col] = 0;
        //   newCell.appendChild(point);
        // }
      } else if (mazeData[row][col] === 3) { //キャラクター(Pacman)
        newCell.classList.add('character');
        const character = document.querySelector('.character');
        const characterRect =  character.getBoundingClientRect();
        characterImg.style.top = `${characterRect.top}px`;
        characterImg.style.left = `${characterRect.left}px`;
      } else if (mazeData[row][col] === 0){ //ポイント
        newCell.classList.add('new_point');
        const point = document.createElement('div');
        point.classList.add('point');
        if (randomPoint() == 1) {
          point.classList.add('high');
        } else {
          point.classList.add('normal');
        }
        newCell.appendChild(point);
      }
    }
  }

  //ポイントのランダム生成
  function randomPoint() {
    MAX = 100;
    let num = Math.floor(Math.random() * MAX);
    if (num == 7 ) {
      return 1;
    } else {
      return 0;
    }
  }

  //5秒カウントダウン
  setTimeout(() => {
    function bfs(startRow, startCol, targetRow, targetCol) {
      const queue = [{row: startRow, col: startCol, distance: 0}];
      const visited = new Set();
  
      while (queue.length > 0) {
        const current = queue.shift();
        const { row, col, distance } = current;
  
        if (row === targetRow && col === targetCol) {
          return distance;
        }
  
        visited.add(`${row}-${col}`);
  
        // 上下左右の移動
        const directions = [{row: -1, col: 0}, {row: 1, col: 0}, {row: 0, col: -1}, {row: 0, col: 1}];
        for (const dir of directions) {
          const newRow = row + dir.row;
          const newCol = col + dir.col;
          if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && !visited.has(`${newRow}-${newCol}`) && mazeData[newRow][newCol] !== 1 && mazeData[newRow][newCol] !== 51 && mazeData[newRow][newCol] !== 52 && mazeData[newRow][newCol] !== 53 && mazeData[newRow][newCol] !== 54 && mazeData[newRow][newCol] !== 21 && mazeData[newRow][newCol] !== 22 && mazeData[newRow][newCol] !== 23 && mazeData[newRow][newCol] !== 24) {
            queue.push({row: newRow, col: newCol, distance: distance + 1});
          }
        }
      }
  
      return -1; // ターゲットに到達できない場合
    }
  
    // 鬼の移動
    // 21番のゴースト
    function moveGhost1() {
      const shortestDistance = bfs(ghostRow1, ghostCol1, characterRow, characterCol);
      if (shortestDistance !== -1) {
        const directions = [{row: -1, col: 0}, {row: 1, col: 0}, {row: 0, col: -1}, {row: 0, col: 1}];
        let bestMove1 = {row: ghostRow1, col: ghostCol1};
        let bestDistance = shortestDistance;
  
        for (const dir of directions) {
          const newRow = ghostRow1 + dir.row;
          const newCol = ghostCol1 + dir.col;
          if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && mazeData[newRow][newCol] !== 1  && mazeData[newRow][newCol] !== 52 && mazeData[newRow][newCol] !== 53 && mazeData[newRow][newCol] !== 54 && mazeData[newRow][newCol] !== 22  && mazeData[newRow][newCol] !== 23  && mazeData[newRow][newCol] !== 24) {
            const distance = bfs(newRow, newCol, characterRow, characterCol);
            if (distance !== -1 && distance < bestDistance) {
              bestMove1 = {row: newRow, col: newCol};
              bestDistance = distance;
            }
          }
        }
  
        mazeData[ghostRow1][ghostCol1] = 0;
        if (mazeData[bestMove1.row][bestMove1.col] !== 22 || mazeData[bestMove1.row][bestMove1.col] !== 23 || mazeData[bestMove1.row][bestMove1.col] !== 24) {
          mazeData[bestMove1.row][bestMove1.col] = 21;
        } else {
          mazeData[ghostRow1][ghostCol1] = 21;
        } 
        redrawMaze();
        ghostRow1 = bestMove1.row;
        ghostCol1 = bestMove1.col;
      }
    }
    // 22番のゴースト
    function moveGhost2() {
      const shortestDistance = bfs(ghostRow2, ghostCol2, characterRow, characterCol);
      if (shortestDistance !== -1) {
        const directions = [{row: -1, col: 0}, {row: 1, col: 0}, {row: 0, col: -1}, {row: 0, col: 1}];
        let bestMove2 = {row: ghostRow2, col: ghostCol2};
        let bestDistance = shortestDistance;
  
        for (const dir of directions) {
          const newRow = ghostRow2 + dir.row;
          const newCol = ghostCol2 + dir.col;
          if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && mazeData[newRow][newCol] !== 1 && mazeData[newRow][newCol] !== 52 && mazeData[newRow][newCol] !== 53 && mazeData[newRow][newCol] !== 54 && mazeData[newRow][newCol] !== 21  && mazeData[newRow][newCol] !== 23  && mazeData[newRow][newCol] !== 24) {
            const distance = bfs(newRow, newCol, characterRow, characterCol);
            if (distance !== -1 && distance < bestDistance) {
              bestMove2 = {row: newRow, col: newCol};
              bestDistance = distance;
            }
          }
        }
  
        mazeData[ghostRow2][ghostCol2] = 0;
        if (mazeData[bestMove2.row][bestMove2.col] !== 21 || mazeData[bestMove2.row][bestMove2.col] !== 23 || mazeData[bestMove2.row][bestMove2.col] !== 24) {
          mazeData[bestMove2.row][bestMove2.col] = 22;
        } else {
          mazeData[ghostRow2][ghostCol2] = 22;
        }
        redrawMaze();
        ghostRow2 = bestMove2.row;
        ghostCol2 = bestMove2.col;
      }
    }
    // 23番のゴースト
    function moveGhost3() {
      const shortestDistance = bfs(ghostRow3, ghostCol3, characterRow, characterCol);
      if (shortestDistance !== -1) {
        const directions = [{row: -1, col: 0}, {row: 1, col: 0}, {row: 0, col: -1}, {row: 0, col: 1}];
        let bestMove2 = {row: ghostRow3, col: ghostCol3};
        let bestDistance = shortestDistance;
  
        for (const dir of directions) {
          const newRow = ghostRow3 + dir.row;
          const newCol = ghostCol3 + dir.col;
          if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && mazeData[newRow][newCol] !== 1 && mazeData[newRow][newCol] !== 52 && mazeData[newRow][newCol] !== 53 && mazeData[newRow][newCol] !== 54 && mazeData[newRow][newCol] !== 22  && mazeData[newRow][newCol] !== 21  && mazeData[newRow][newCol] !== 24) {
            const distance = bfs(newRow, newCol, characterRow, characterCol);
            if (distance !== -1 && distance < bestDistance) {
              bestMove2 = {row: newRow, col: newCol};
              bestDistance = distance;
            }
          }
        }
  
        mazeData[ghostRow3][ghostCol3] = 0;
        if (mazeData[bestMove2.row][bestMove2.col] !== 21 || mazeData[bestMove2.row][bestMove2.col] !== 22 || mazeData[bestMove2.row][bestMove2.col] !== 24) {
          mazeData[bestMove2.row][bestMove2.col] = 23;
        } else {
          mazeData[ghostRow3][ghostCol3] = 23;
        }
        redrawMaze();
        ghostRow3 = bestMove2.row;
        ghostCol3 = bestMove2.col;
      }
    }
    // 24番のゴースト
    function moveGhost4() {
      const shortestDistance = bfs(ghostRow4, ghostCol4, characterRow, characterCol);
      if (shortestDistance !== -1) {
        const directions = [{row: -1, col: 0}, {row: 1, col: 0}, {row: 0, col: -1}, {row: 0, col: 1}];
        let bestMove2 = {row: ghostRow4, col: ghostCol4};
        let bestDistance = shortestDistance;
  
        for (const dir of directions) {
          const newRow = ghostRow4 + dir.row;
          const newCol = ghostCol4 + dir.col;
          if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && mazeData[newRow][newCol] !== 1 && mazeData[newRow][newCol] !== 52 && mazeData[newRow][newCol] !== 53 && mazeData[newRow][newCol] !== 54 && mazeData[newRow][newCol] !== 22  && mazeData[newRow][newCol] !== 23  && mazeData[newRow][newCol] !== 21) {
            const distance = bfs(newRow, newCol, characterRow, characterCol);
            if (distance !== -1 && distance < bestDistance) {
              bestMove2 = {row: newRow, col: newCol};
              bestDistance = distance;
            }
          }
        }
  
        mazeData[ghostRow4][ghostCol4] = 0;
        if (mazeData[bestMove2.row][bestMove2.col] !== 21 || mazeData[bestMove2.row][bestMove2.col] !== 22 || mazeData[bestMove2.row][bestMove2.col] !== 23) {
          mazeData[bestMove2.row][bestMove2.col] = 24;
        } else {
          mazeData[ghostRow4][ghostCol4] = 24;
        }
        redrawMaze();
        ghostRow4 = bestMove2.row;
        ghostCol4 = bestMove2.col;
      }
    }

    //パックマンの移動(419~558)
    // 移動速度調整用の変数
    const initialMoveInterval = 250; // 最初の移動間隔（ミリ秒）
    const minMoveInterval = 10; // 最小の移動間隔（ミリ秒）
    const intervalDecrement = 0; // 移動間隔の減少量（ミリ秒）
    let currentMoveInterval = initialMoveInterval;
    let keyFlag = false;
  
    // キーボードのキープレス状態を管理する変数
    const keyState = {
      'w': false,
      's': false,
      'a': false,
      'd': false,
      'ArrowUp':false,
      'ArrowLeft': false,
      'ArrowRight': false,
      'ArrowDown': false,
    };
  
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      if (key === 'w' || key === 'a' || key === 's' || key === 'd' || key === 'ArrowUp' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowDown') {
        // 他のキーが押されていない場合のみ処理
        if (!keyState[key] && !keyFlag) {
          if (!isAnyKeyPressed()) {
            keyState[key] = true;
            if (!keyFlag) {
              moveCharacter(key);
              keyFlag = true;
            }
          }
  
          intervalId = setInterval(() => {
            moveCharacter(key);
            adjustMoveInterval(); // 移動間隔調整
          }, currentMoveInterval);
        }
      }
    });
  
    document.addEventListener('keyup', (event) => {
      const key = event.key;
      keyState[key] = false;
      clearInterval(intervalId);
      currentMoveInterval = initialMoveInterval; // 移動間隔をリセット
      keyFlag = false;
    });
  
    function adjustMoveInterval() {
      if (currentMoveInterval > minMoveInterval) {
        currentMoveInterval -= intervalDecrement;
      }
    }
  
    function isAnyKeyPressed() {
      for (const key in keyState) {
        if (keyState[key]) {
          return true;
        }
      }
      return false;
    }

    //難易度によるポイント倍率の変更
    function pointPercent(val) {
      if (val == 400) {
        level.innerHTML = 'Easy';
        return 0.5;
      } else if (val == 300) {
        level.innerHTML = 'Normal';
        return 1;
      } else if (val == 275) {
        level.innerHTML = 'Hard';
        return 1.25;
      } else if (val == 250) {
        level.innerHTML = 'Very-Hard';
        return 1.5;
      } else if (val == 225) {
        level.innerHTML = 'Super-Hard';
        return 2;
      }
    }
  
    //パックマンの移動
    function moveCharacter(direction) {
      let newCharacterRow = characterRow;
      let newCharacterCol = characterCol;
      const characterImgs = characterImg.querySelector('img');
      if (direction === 'w' || direction === 'ArrowUp' && characterRow > 0 && keyState[direction]) {
        newCharacterRow--;
        characterImgs.style.transform = 'rotate(270deg)';
      } else if (direction === 's' || direction === 'ArrowDown' && characterRow < numRows - 1 && keyState[direction]) {
        newCharacterRow++;
        characterImgs.style.transform = 'rotate(90deg)';
      } else if (direction === 'a' || direction === 'ArrowLeft' && characterCol > 0 && keyState[direction]) {
        newCharacterCol--;
        characterImgs.style.transform = 'rotate(180deg)';
      } else if (direction === 'd' || direction === 'ArrowRight' && characterCol < numCols - 1 && keyState[direction]) {
        newCharacterCol++;
        characterImgs.style.transform = 'rotate(0deg)';
      }
    
      // 移動先が壁でないことを確認
      if (mazeData[newCharacterRow][newCharacterCol] !== 1 && mazeData[newCharacterRow][newCharacterCol] !== 52 && mazeData[newCharacterRow][newCharacterCol] !== 53 && mazeData[newCharacterRow][newCharacterCol] !== 54) {
        // 移動処理
        mazeData[characterRow][characterCol] = 0; // 古い位置をクリア
        mazeData[newCharacterRow][newCharacterCol] = 3; // 新しい位置にキャラクターを配置
        redrawMaze();
    
        // 位置情報を更新
        characterRow = newCharacterRow;
        characterCol = newCharacterCol;
  
        const character = mazeTable.rows[characterRow].cells[characterCol];
        character.classList.add('character');
        const pointPercents = pointPercent(optionSpeeds.value);
        if (character.querySelector('.point')) {
          if (character.querySelector('.high')) {
            scoreNum += (Math.floor(500 * pointPercents));
            // console.log(Math.floor(500 * pointPercents));
            highCount++;
            character.querySelector('.point').classList.remove('high');
          } else if (character.querySelector('.normal')) {
            scoreNum += (Math.floor(50 * pointPercents));
            // console.log(Math.floor(50 * pointPercents));
            lowCount++;
            character.querySelector('.point').classList.remove('normal');
          }
          score.innerHTML = scoreNum;
        }
        const characterRect =  character.getBoundingClientRect();
        characterImg.style.top = `${characterRect.top}px`;
        characterImg.style.left = `${characterRect.left}px`;
        // 鬼との接触を確認
        if (characterRow === ghostRow1 && characterCol === ghostCol1 || characterRow === ghostRow2 && characterCol === ghostCol2 || characterRow === ghostRow3 && characterCol === ghostCol3 || characterRow === ghostRow4 && characterCol === ghostCol4) {
          console.log("鬼に追いつかれました！");
          keyFlag = true;
        }
      }
    }

    // 迷路の再描画(559~620)
    function redrawMaze() {
      let count = 0; 
      let num;
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const cell = mazeTable.rows[row].cells[col];
          cell.className = '';
          if (mazeData[row][col] === 1 || mazeData[row][col] === 52 ||mazeData[row][col] === 53 ||mazeData[row][col] === 54 ) {
            cell.classList.add('wall');
            if (mazeData[row][col] === 52 ||mazeData[row][col] === 53 || mazeData[row][col] === 54 ) {
              if (mazeData[row][col] == parseInt(`5${((3 * 60 - timeNum) / 30) + 1}`)) {
                cell.className = '';
                mazeData[row][col] = 0;
                wallBreakCount = 1; 
              }
            }
          } else if (mazeData[row][col] === 21 || mazeData[row][col] === 22 || mazeData[row][col] === 23 || mazeData[row][col] === 24) {
            let ghostImg,ghostRect;
            if (mazeData[row][col] === 21) {
              num = 21;
            } else if (mazeData[row][col] === 22) {
              num = 22;
            } else if (mazeData[row][col] === 23) {
              num = 23;
            } else if (mazeData[row][col] === 24) {
              num = 24;
            } 
            cell.classList.add(`ghost${num}`);
            ghostImg = document.querySelector(`.ghost${num}_img`);
            ghostRect = document.querySelector(`.ghost${num}`).getBoundingClientRect();
            ghostImg.style.top = `${ghostRect.top}px`;
            ghostImg.style.left = `${ghostRect.left}px`;
          } else if (mazeData[row][col] === 3) {
            cell.classList.add('character');
            count++;
          } else if (mazeData[row][col] === 0 && timeNum == 60 || timeNum == 50) {
            let point;
            if (cell.querySelector('.point')) {
              point = cell.querySelector('.point');
            } else {
              point = document.createElement('div');
            }

            if (timeNum == 60) {
              point.className = 'point high';
              time.style.color = 'red';
            } else if (timeNum == 50) {
              if (randomPoint() == 1) {
                point.className = 'point high';
              } else {
                point.className = 'point normal';
              }
              time.style.color = '#fff';
            }
          }
        }
      }
      if (count == 0) {
        setUp(1);
      }
    }
  
    // 操作キャラクターと鬼の位置を取得
    let characterRow, characterCol, 
    ghostRow1, ghostCol1, 
    ghostRow2, ghostCol2,
    ghostRow3, ghostCol3, 
    ghostRow4, ghostCol4;
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        if (mazeData[row][col] === 3) {
          characterRow = row;
          characterCol = col;
          const character = mazeTable.rows[characterRow].cells[characterCol];
          const characterRect =  character.getBoundingClientRect();
          characterImg.style.top = `${characterRect.top}px`;
          characterImg.style.left = `${characterRect.left}px`;
        } else if (mazeData[row][col] === 21 || mazeData[row][col] === 22 || mazeData[row][col] === 23 || mazeData[row][col] === 24) {
          if (mazeData[row][col] === 21) {
            ghostRow1 = row;
            ghostCol1 = col;
          } else if (mazeData[row][col] === 22){
            ghostRow2 = row;
            ghostCol2 = col;
          } else if (mazeData[row][col] === 23){
            ghostRow3 = row;
            ghostCol3 = col;
          } else if (mazeData[row][col] === 24){
            ghostRow4 = row;
            ghostCol4 = col;
          }
        }
      }
    }

    //時間経過  
    function scoreSum() {
      --timeNum;
      time.innerHTML = `${( '00' + Math.floor(timeNum / 60) ).slice( -2 )}:${( '00' + (timeNum % 60) ).slice( -2 )}`;
      if (timeNum == 0) {
        setUp(1);
      }
    }

    //データのポスト
    async function putData (id,score) {
      try {
          const query = {
              score: score,
          }
          await fetch(`http://${server_IP}/api/updateScore/${id}`,{
            // await fetch(`http://${local_IP}/api/updateScore/${id}`,{
              method: "PUT",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(query),
          })
          .then((response) => response.json())
          .then((data) => {
              console.log(data);
          })
      } catch (error) {
          console.log(error);
      }
    }

    //interval開始と解除の塊
    let finishCount = 0;
    function setUp (num) {
      if (num == 1) {
          // if (array.length == 1) {
          //   clearInterval(ghostInterval1);
          // } else if (array.length == 2) {
          //   clearInterval(ghostInterval1);
          //   clearInterval(ghostInterval2);
          // } else if (array.length == 3) {
          //   clearInterval(ghostInterval1);
          //   clearInterval(ghostInterval2);
          //   clearInterval(ghostInterval3);
          // } else if (array.length == 4) {
            clearInterval(ghostInterval1);
            clearInterval(ghostInterval2);
            clearInterval(ghostInterval3);
            clearInterval(ghostInterval4);
          // }
        clearInterval(timeSet);
        keyFlag = true;
        if (finishCount == 0) {
          if (timeNum == 0) {
            gameSet.querySelector('h1').innerHTML = '＼＼GAME CLEAR／／';
          }
          putData(idNumber,scoreNum);
          gameSet.classList.remove('close');
          document.querySelector('.name').innerHTML = usernamed;
          document.querySelector('.high_count').innerHTML = highCount;
          document.querySelector('.low_count').innerHTML = lowCount;
          gameSet.querySelector('.timeLast').innerHTML =  `${( '00' + Math.floor(timeNum / 60) ).slice( -2 )}：${( '00' + (timeNum % 60) ).slice( -2 )}`;
          gameSet.querySelector('.scoreLast').innerHTML = scoreNum;
        }
        finishCount = 1;
      } else {
        let move = optionSpeeds.value;
        mazeTable.classList.add(`sp${optionSpeeds.value}`);
          // if (array.length == 1) {
          //   ghostInterval1 = setInterval(moveGhost1, move);
          // } else if (array.length == 2) {
          //   ghostInterval1 = setInterval(moveGhost1, move);
          //   ghostInterval2 = setInterval(moveGhost2, move);
          // } else if (array.length == 3) {
          //   ghostInterval1 = setInterval(moveGhost1, move);
          //   ghostInterval2 = setInterval(moveGhost2, move);
          //   ghostInterval3 = setInterval(moveGhost3, move);
          // } else if (array.length == 4) {
            ghostInterval1 = setInterval(moveGhost1, move);
            ghostInterval2 = setInterval(moveGhost2, move);
            ghostInterval3 = setInterval(moveGhost3, move);
            ghostInterval4 = setInterval(moveGhost4, move);
          // }
        timeSet = setInterval(scoreSum,1000);
      }
    }
    setUp(0);
  }, 5000);
}
