import { createGlobalStyle } from 'styled-components';
import GmarketSansBoldWoff from './GmarketSansBold.woff';
import GmarketSansBoldWoff2 from './GmarketSansBold.woff2';
import GmarketSansBoldTtf from './GmarketSansBold.ttf';
import GmarketSansMediumWoff from './GmarketSansMedium.woff';
import GmarketSansMediumWoff2 from './GmarketSansMedium.woff2';
import GmarketSansMediumTtf from './GmarketSansMedium.ttf';
import GmarketSansLightWoff from './GmarketSansLight.woff';
import GmarketSansLightWoff2 from './GmarketSansLight.woff2';
import GmarketSansLightTtf from './GmarketSansLight.ttf';

export default createGlobalStyle`
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${GmarketSansBoldWoff2}) format('woff2'),
		url(${GmarketSansBoldWoff}) format('woff'),
		url(${GmarketSansBoldTtf}) format('truetype');
		font-weight: 700;
		font-style: normal;
	}
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${GmarketSansMediumWoff2}) format('woff2'),
		url(${GmarketSansMediumWoff}) format('woff'),
		url(${GmarketSansMediumTtf}) format('truetype');
		font-weight: 500;
		font-style: normal;
	}
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${GmarketSansLightWoff2}) format('woff2'),
		url(${GmarketSansLightWoff}) format('woff'),
		url(${GmarketSansLightTtf}) format('truetype');
		font-weight: 350;
		font-style: normal;
	}
`;
