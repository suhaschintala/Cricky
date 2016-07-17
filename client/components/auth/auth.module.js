'use strict';

angular.module('crickyApp.auth', ['crickyApp.constants', 'crickyApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
