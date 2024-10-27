'use strict';

/**
 * sales-point service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sales-point.sales-point');
