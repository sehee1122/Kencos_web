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

2. todo DB table model
> models > index.js, config > config.json, migrations, seeders

  - 모델 정의하기

  + TypeError: Cannot read property 'use_env_variable' of undefined
```sh
  
```

3. Sequelize data query
  - CLI로 model 만들기
```
sequelize model:create --name TABLE_NAME  --attributes "COLUMN1:type, COLUMN2:type, COLUMN3:type"
```
  - user model 만들기
```
sequelize model:create --name user --attributes nickName: string, passWord: string
```

4. postman, client

