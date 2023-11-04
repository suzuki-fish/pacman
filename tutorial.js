const characterImg = document.querySelector('.character_img');
const ghostImg = document.querySelector(`.ghost_img`);
const fast = document.querySelector('.fast');
const mazeData = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,3,0,0,1,1,0,0,0,1],
    [1,0,1,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,0,1,0,0,0,0,0,0,1],
    [1,0,0,0,1,1,0,1,2,1],
    [1,1,1,1,1,1,1,1,1,1],
]
const numRows = mazeData.length;
const numCols = mazeData[0].length;
const mazeTable = document.getElementById('maze');
characterImg.style.opacity = 1;
ghostImg.style.opacity = 1;

for (let row = 0; row < numRows; row++) {
    const newRow = mazeTable.insertRow();
    for (let col = 0; col < numCols; col++) {
      const newCell = newRow.insertCell();
      if (mazeData[row][col] === 1 || mazeData[row][col] === 52 ||mazeData[row][col] === 53 ||mazeData[row][col] === 54 ) {
        newCell.classList.add('wall');
      } else if (mazeData[row][col] === 2) {
        newCell.classList.add('ghost');
        const ghost = document.querySelector('.ghost');
        const ghostRect =  ghost.getBoundingClientRect();
        ghostImg.style.top = `${ghostRect.top}px`;
        ghostImg.style.left = `${ghostRect.left}px`;
      } else if (mazeData[row][col] === 3) {
        newCell.classList.add('character');
        const character = document.querySelector('.character');
        const characterRect =  character.getBoundingClientRect();
        characterImg.style.top = `${characterRect.top}px`;
        characterImg.style.left = `${characterRect.left}px`;
      } else if (mazeData[row][col] === 0){
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

  function randomPoint() {
    MAX = 100;
    let num = Math.floor(Math.random() * MAX);
    if (num == 7 ) {
      return 1;
    } else {
      return 0;
    }
  }


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
      if (key === 'w' || key === 'a' || key === 's' || key === 'd' ||
          key === 'ArrowUp' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowDown') {
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
        if (character.querySelector('.point')) {
          if (character.querySelector('.high')) {
            character.querySelector('.point').classList.remove('high');
          } else if (character.querySelector('.normal')){
            character.querySelector('.point').classList.remove('normal');
          }
        }
        const characterRect =  character.getBoundingClientRect();
        characterImg.style.top = `${characterRect.top}px`;
        characterImg.style.left = `${characterRect.left}px`;
        // 鬼との接触を確認
        if (characterRow === ghostRow && characterCol === ghostCol) {
          console.log("鬼に追いつかれました！");
          keyFlag = true;
        }
      }
    }

    // 迷路の再描画
    function redrawMaze() {
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const cell = mazeTable.rows[row].cells[col];
          cell.className = '';
          if (mazeData[row][col] === 1) {
            cell.classList.add('wall');
          } else if (mazeData[row][col] === 2) {
            cell.classList.add('ghost');
            ghostRect = document.querySelector(`.ghost`).getBoundingClientRect();
            ghostImg.style.top = `${ghostRect.top}px`;
            ghostImg.style.left = `${ghostRect.left}px`;
          } else if (mazeData[row][col] === 3) {
            cell.classList.add('character');
          }
        }
      }
    }
  
    // 操作キャラクターと鬼の位置を取得
    let characterRow, characterCol, ghostRow, ghostCol;
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (mazeData[row][col] === 3) {
                characterRow = row;
                characterCol = col;
                const character = mazeTable.rows[characterRow].cells[characterCol];
                const characterRect =  character.getBoundingClientRect();
                characterImg.style.top = `${characterRect.top}px`;
                characterImg.style.left = `${characterRect.left}px`;
            } else if (mazeData[row][col] === 2) {
                ghostRow = row;
                ghostCol = col;
            }
        }
    }

    let count = 0;
    function turoeial() {
      fast.style.display = 'none';
      document.querySelector('.board').style.display = 'flex';
      if (count == 0) {
        count++;
        // setTimeout(() => {
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
  
            function moveGhost() {
              const shortestDistance = bfs(ghostRow, ghostCol, characterRow, characterCol);
              if (shortestDistance !== -1) {
                const directions = [{row: -1, col: 0}, {row: 1, col: 0}, {row: 0, col: -1}, {row: 0, col: 1}];
                let bestMove = {row: ghostRow, col: ghostCol};
                let bestDistance = shortestDistance;
          
                for (const dir of directions) {
                  const newRow = ghostRow + dir.row;
                  const newCol = ghostCol + dir.col;
                  if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && mazeData[newRow][newCol] !== 1  && mazeData[newRow][newCol] !== 52 && mazeData[newRow][newCol] !== 53 && mazeData[newRow][newCol] !== 54 && mazeData[newRow][newCol] !== 22  && mazeData[newRow][newCol] !== 23  && mazeData[newRow][newCol] !== 24) {
                    const distance = bfs(newRow, newCol, characterRow, characterCol);
                    if (distance !== -1 && distance < bestDistance) {
                      bestMove = {row: newRow, col: newCol};
                      bestDistance = distance;
                    }
                  }
                }
          
                mazeData[ghostRow][ghostCol] = 0;
                mazeData[bestMove.row][bestMove.col] = 2;
                redrawMaze();
                ghostRow = bestMove.row;
                ghostCol = bestMove.col;
              }
            }
  
            ghostInterval = setInterval(moveGhost, 250);
        // }, 10000); 
      }
    }