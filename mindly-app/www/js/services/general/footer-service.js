'use-strict';

angular.module('mindlyApp')
	.factory('Footer', [function(){
		var footer = {
			isActive: false,
			rightLabel: '',
			middleLabel: '',
			leftLabel: '',
		};

		footer.addDataFooter = function(right, left, middle){
			this.rightLabel = rightLabel;
			this.leftLabel = leftLabel;
			this.middleLabel = middleLabel;
		};

		footer.setFooterOn = function(){
			this.isActive = true;
		};

		footer.setFooterOff = function(){
			this.isActive = false;
		};

		footer.destroyFooter = function(){
			this.isActive = false;
			this.rightLabel = '';
			this.middleLabel = '';
			this.leftLabel = ''; 
		};

		footer.getFooterState = function(){
			return this.isActive;
		};

		footer.getLeftLabel = function(){
			return this.leftLabel;
		};

		footer.setLeftLabel = function(label){
			this.leftLabel = label;
		};

		footer.getMiddleLabel = function(){
			return this.middleLabel;
		};

		footer.setMiddleLabel = function(label){
			this.middleLabel = label;
		};

		footer.getRightLabel = function(){
			return this.rightLabel;
		};

		footer.setRightLabel = function(label){
			this.rightLabel = label;
		};

		return footer;
	}]); 