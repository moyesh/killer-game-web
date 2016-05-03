'use strict';

const _ = require('lodash');

const appModule = angular.module('KillersService', []);

appModule.factory('KillersService', ['WordsService',
	function KillersServiceFactory(WordsService) {

		this.killers = [];

		const getKillers = () => this.killers;

		const addKiller = (killer) => {
			this.killers.push({
				name: killer,
				uuid: _.random(1000000).toString(),
				word: WordsService.getWord(this.killers.length+1)
			});
		};

		// The public API interface
		return {
			getKillers,
			addKiller
		}

	}]);

module.exports = appModule.name;