import { config } from 'dotenv';
config();
import services from './config/services';

// Init app server
services.server.init();