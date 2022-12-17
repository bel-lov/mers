const path = require('path')

module.exports = {
    entry: {//точка входа, здесть прописываем все импорты 
        main: path.resolve(_dirname, './src/index.js')
    },
    output: {//точка выхода куда будет собираться один файл из всех модулей
        path: path.resolve(_dirname, './dist'),
        filename: '[name].js'
    }
}