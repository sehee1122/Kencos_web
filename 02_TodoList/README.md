# TodoList page
> Node.js express, MariaDB

## Installation
```sh
npm install <package> --save
```

1. FirstPractice
2. AddList
3. TodoList
4. ORMList

List
-----
1. install Sequelize: config
```
npm list | grep sequelize
npm install -- save sequelize@5.9.5
npm install --save sequelize-cli@5.5.1
npm list | grep sequelize
npx sequelize init
```

if node.js
-bash: sequelize: command not found
```
npm install --g or --save sequelize
npm --g or --save sequelize-cli
```

2. todo DB table model
```
./node_modules/.bin/sequelize init
```
> models > index.js, config > config.json, migrations, seeders

  - 모델 정의하기

  + TypeError: Cannot read property 'use_env_variable' of undefined

3. Sequelize data query
  - CLI로 model 만들기
```
sequelize model:create --name TABLE_NAME  --attributes "COLUMN1:type, COLUMN2:type, COLUMN3:type"
```
  - user model 만들기
```
sequelize model:create --name user --attributes nickName: string, passWord: string
node_modules/.bin/sequelize model:generate --name TodoList_seq --attributes id:integer,dueDate:text,toDo:text,toDetails:text,toColor:char
```
> models > todolist_seq.js, migrations > 20201005024714-create-todo-list-seq.js

  - migration 작업
```
./node_modules/.bin/sequelize db:migrate
```
  - migration 취소
```
./node_modules/.bin/sequelize db:migrate:undo
```

4. postman, client
  - sequelize CLI seed 기능 -> 테이블에 데이터 추가
  > Seed: 생성된 테이블에 데이터를 추가할 수 있게 해주는 기능
```
./node_modules/.bin/sequelize seed:generate --name userData
```

Error: No Sequelize instance passed
