module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleDirectories: ['node_modules', '<rootDir>'],
  transformIgnorePatterns: ['node_modules/(?!@angular|rxjs|@ngrx|ngx-toastr)'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
};
