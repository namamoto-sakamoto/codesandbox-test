/**
 * var変数は上書き、再宣言が可能
 */
// var val1 = "var変数";
// console.log(val1);
// var val1 = "var変数は上書き可能";
// console.log(val1);
// var val1 = "var変数は再宣言可能";
// console.log(val1);

/**
 * let.const
 */
// letは上書きが可能、再宣言は不可能
// let val2 = "let変数";
// console.log(val2);

// const変数は上書きも再宣言も不可能
// const val3 = "const変数";
// console.log(val3);

//constはオブジェクトや配列に関しては値を変えることが可能
// const val4 = {
//   name: "じゃけぇ",
//   age: "28",
// };
// val4.name = "jak";
// val4.addres = "Hiroshima";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// //「私の名前はじゃけぇです。年齢は２８歳です。」
// const message1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

/**
 * アロー関数　「=>」
 */
// const func1 = (str) => {
//   return str;
// }

//処理が１行で返すだけの処理のときは「return」を省略して書ける
// const func2 = (str) => str;
// console.log(func1("func1です。"));
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
//オブジェクト
// const myProfile = {
//   name: "じゃけぇ",
//   age: "28",
// };

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//配列
// const myProfile = ['じゃけぇ', 28];
//配列は順番に値を受け取るよ
// const [name, age] = myProfile;
// const massage3 = `名前は${name}です。年齢は${age}歳です。`
// console.log(massage3);

/**
 * デフォルト値、引数など
 */
//(name = "ゲスト")の「= "ゲスト"」の部分は初期値を設定しているよ！
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("じゃけぇ");

/**
 * スプレット構文　　「...」(順番に処理する！)
 */
//　　配列の展開(配列の中身を順番に処理して展開してくれる)
// const arr1 = [1, 2]
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
//従来のやり方
// sumFunc(arr1[0], arr1[1]);
// スプレット構文「...」を使用すると
// sumFunc(...arr1)

//配列をまとめて受け取る（分割代入と一緒に使われることが多い）

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// コピー
// const arr6 = [...arr4];
// console.log(arr6);
// 結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理（配列に使う関数）
 * map（アロー関数）は配列をループしてそれぞれの名前を表示したり処理したりしたい時に使う関数
 * filter(アロー関数)ある条件に一致したものだけ返却して新しい配列を生成する関数
 * (index ←なんかいめの処理かを管理する)
 */
// const nameArr = ["田中", "山田", "じゃけぇ"];
//mapの基本的な構文
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// ↑の構文を省略して返すと
// nameArr.map((name) => console.log(name));

// 何番目の要素なのかを返したいとき（引数を２つ取ればOK）
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// 「じゃけぇ」以外には語尾に「さん」をつけた新しい配列を生成したいとき(if分)
// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

//filter(この番号の中から奇数の数字だけ返したい時)
// const numArr = [1, 2, 3, 4, 5];
//filterの基本的な構文
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

/**
 * 三項演算子　「？　 :」
 */
// ある条件　　? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 >0 ? 'trueです' : 'falseです';
// console.log(val1);

//実装サンプル
// const num = 1300;
// console.log(num.toLocaleString());

// 「toLocaleString」は３桁ごとにカンマ区切りをつけてくれる関数
// 「typeof」はその変数の型がなんなのかを判定してくれる関数
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

//関数のリターン部分に三項演算子を使う例
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！' : '許容範囲内です';
// }
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味 && ||(if文の中とかに使われる)
 * 「＆＆」 かつ？
 * 「||」 または？
 */
//よく見る構文
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// 「||」は左側がfalseなら右側を返す！
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// 「&&」は左側がtrueなら右側を返す！
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
