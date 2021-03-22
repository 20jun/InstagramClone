/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// AWS Amplify
// 모바일 및 프런트 엔드 웹 개발자가 AWS에서 구동되는 안전하고 확장 가능한 풀 스택 애플리케이션을
// 개발하도록 지원하는 도구 및 서비스 집합.
// Amplify를 사용하면 몇 분 만에 앱 백엔드를 구성하고 앱을 연결하며, 클릭 몇 번 만으로
// 정적 웹 앱을 배포하고, AWS 콘솔 외부에서 앱 콘텐츠를 쉽게 관리할 수 있다.
import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config)

AppRegistry.registerComponent(appName, () => App);
