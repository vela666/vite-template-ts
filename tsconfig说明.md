### target、lib、moudle
```html
module：用于指定模块系统的类型。常用的选项包括 "CommonJS"、"AMD"、"System"、"ES2015" 和 "ESNext" 等。该选项决定了编译器如何将 TypeScript 代码转换为 JavaScript 模块，从而在不同的环境中实现代码的复用和组合。

lib：用于指定 TypeScript 可以使用的 JavaScript 库的版本和特性。常用的选项包括 "ES5"、"ES6"、"DOM"、"WebWorker" 和 "ESNext" 等。该选项决定了 TypeScript 编译器能够访问哪些 JavaScript 对象、类型和 API，从而实现类型检查和代码提示等功能。

target：用于指定编译后的 JavaScript 代码的目标版本。常用的选项包括 "ES5"、"ES6"、"ES2015"、"ES2016"、"ES2017"、"ES2018" 和 "ESNext" 等。该选项决定了编译器生成的 JavaScript 代码的语法和特性，从而保证代码能够在目标环境中正确运行。
```
### target、lib、moudle怎么设置合适
```html
在设置 module、lib 和 target 选项时，需要根据具体的项目需求和目标环境来选择合适的选项

module 选项：一般来说，如果目标环境是浏览器或 Node.js，可以选择 "ESNext" 或 "ES2015" 等支持 ES 模块的选项。如果需要与其他语言的模块进行交互，可以选择 "CommonJS" 或 "AMD" 等通用的模块系统选项。此外，如果需要进行动态加载或按需加载，可以选择 "System" 等支持异步加载的选项。需要注意的是，在使用不同的模块系统时，还需要进行相应的配置和打包等处理，以确保最终代码能够正确运行和发布。

lib 选项：一般来说，如果目标环境是浏览器或 Node.js，可以选择 "DOM"、"ESNext" 或 "ES2015" 等常用的库选项。如果需要使用一些特定的库或框架，可以根据需要添加相应的选项，如 "jQuery"、"React" 或 "Vue" 等。此外，如果需要进行较为复杂的类型检查或代码提示等功能，可以选择包含更多 JavaScript 对象和类型的选项，如 "ESNext" 或 "Full" 等。需要注意的是，在添加库选项时，还需要确保相应的库已经安装并可以被 TypeScript 编译器访问。

target 选项：一般来说，如果目标环境是现代浏览器或 Node.js，可以选择 "ES2015" 或 "ES2016" 等较新的选项，以支持更多的语法和特性。如果需要兼容较老的浏览器或 Node.js 版本，可以选择 "ES5" 或 "ES3" 等较为保守的选项。需要注意的是，在选择目标版本时，还需要考虑代码的运行时性能和可维护性等方面，以确保代码能够在目标环境中正确运行。

```
### allowSyntheticDefaultImports有什么用
```html
allowSyntheticDefaultImports 选项用于允许在导入模块时可以使用默认导出，即使模块本身没有默认导出的情况下
默认情况下，如果一个模块没有默认导出，则不能使用默认导入语法进行导入。例如，假设有一个名为 foo 的模块，它导出了一个名为 bar 的成员：
// foo.ts
export const bar = 'hello';

在另一个文件中，如果想要导入 foo 模块的 bar 成员，可以这样写：
import { bar } from './foo';
console.log(bar); // 输出：hello

但是，如果尝试使用默认导入语法导入 foo 模块，就会报错：
import foo from './foo'; // 报错

这是因为 foo 模块没有默认导出。如果需要使用默认导入语法，可以在 tsconfig.json 中将 allowSyntheticDefaultImports 设置为 true：
import foo from './foo';
console.log(foo.bar); // 输出：hello
这里的 foo 是一个对象，它包含了 foo.ts 模块导出的所有成员，因为该模块没有默认导出，所以使用默认导入语法时，实际上是将模块的导出成员赋值给一个名为 foo 的对象。

```
### types 有什么用
```html
types 是一个用于指定被包含在编译中的类型声明文件的配置项。这些类型声明文件可以描述 JavaScript 库和模块中的类型信息，以便在使用这些库和模块时提供更好的类型检查和编辑器提示。

当 TypeScript 编译器处理 JavaScript 文件时，如果 types 配置项被指定，编译器将会检查和加载对应的类型声明文件，以提供更好的类型检查和智能提示。这些类型声明文件可以是 .d.ts 文件，也可以是在 @types 命名空间中安装的类型声明文件包。

举个例子，假设我们想要使用一个名为 lodash 的 JavaScript 库，并且希望 TypeScript 在使用这个库时提供类型检查和智能提示。我们可以在 tsconfig.json 中设置 types 配置项：
{
"compilerOptions": {
// ...
"types": ["lodash"]
}
}
这告诉 TypeScript 编译器，当它编译我们的代码时，应该检查和加载 lodash 库的类型声明文件，以便在使用该库时提供类型检查和智能提示。

需要注意的是，types 配置项仅适用于编译器，而不会影响生成的 JavaScript 代码。如果我们想要将类型声明文件打包到生成的 JavaScript 文件中，我们需要使用其他的工具或配置项。
```

###  baseUrl 有什么用
```html
baseUrl 是 TypeScript 的一个编译选项，用于指定项目中所有非相对导入（即以 ./ 或 ../ 开头的导入）的根路径。它是一个字符串，可以是一个相对路径或一个绝对路径。

通过设置 baseUrl，可以简化在代码中引入模块的路径，使它们更易于维护和重构。例如，如果项目中的所有模块都位于 src 目录下，可以将 baseUrl 设置为 ./src，那么在代码中引入模块时就可以省略 src 目录，只需指定相对于 src 目录的路径即可。

下面是一个例子：
{
"compilerOptions": {
"baseUrl": "./src",
"outDir": "./dist",
"module": "commonjs",
"target": "es6",
"allowJs": true
}
}
在上面的配置中，baseUrl 被设置为 ./src，表示项目中所有非相对导入的模块都应该从 ./src 目录下查找。例如，假设有一个模块 ./src/utils/math.ts，在另一个模块中引入该模块时可以这样写：

import { add } from "utils/math";
这里省略了 ./src 目录，因为 baseUrl 已经设置为 ./src。
```
### outDir 有什么用
```html
outDir 是 TypeScript 配置文件 tsconfig.json 中的一个选项，用于指定编译输出目录。当 TypeScript 编译器编译 TypeScript 文件时，会将编译后的 JavaScript 文件输出到 outDir 指定的目录下。

例如，如果你将 outDir 设置为 dist，那么编译器就会将编译后的 JavaScript 文件输出到项目根目录下的 dist 目录中。这样做的好处是可以将 TypeScript 代码和编译后的 JavaScript 代码分开存放，避免混淆和误操作。

除了 outDir，TypeScript 还有其他几个与输出相关的配置选项，例如 rootDir 和 declarationDir。其中，rootDir 用于指定项目中的 TypeScript 文件的根目录，而 declarationDir 用于指定 TypeScript 编译器输出声明文件的目录。
```
