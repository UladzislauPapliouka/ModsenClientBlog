module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@constants$': '<rootDir>/src/constants/',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@assets$': '<rootDir>/src/assets/',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^containers/(.*)$': '<rootDir>/src/containers/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@typing/(.*)$': '<rootDir>/src/types/$1',
    '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@typing$': '<rootDir>/src/types/',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
  },
  preset: 'ts-jest',
  resolver: 'ts-jest-resolver',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
};
