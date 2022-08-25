import { createGlobalStyle } from 'styled-components';
import GmarketSansBoldWoff from '@assets/fonts/GmarketSansBold.woff';
import GmarketSansBoldWoff2 from '@assets/fonts/GmarketSansBold.woff2';
import GmarketSansBoldTtf from '@assets/fonts/GmarketSansBold.ttf';
import GmarketSansMediumWoff from '@assets/fonts/GmarketSansMedium.woff';
import GmarketSansMediumWoff2 from '@assets/fonts/GmarketSansMedium.woff2';
import GmarketSansMediumTtf from '@assets/fonts/GmarketSansMedium.ttf';
import GmarketSansLightWoff from '@assets/fonts/GmarketSansLight.woff';
import GmarketSansLightWoff2 from '@assets/fonts/GmarketSansLight.woff2';
import GmarketSansLightTtf from '@assets/fonts/GmarketSansLight.ttf';

export default createGlobalStyle`
	@font-face {
		font-family: 'GmarketSans';
		src: local(☺),
		url(${GmarketSansBoldWoff2}) format('woff2'),
		url(${GmarketSansBoldWoff}) format('woff'),
		url(${GmarketSansBoldTtf}) format('truetype');
		font-weight: 700;
		font-style: normal;
	}
	@font-face {
		font-family: 'GmarketSans';
		src: local(☺),
		url(${GmarketSansMediumWoff2}) format('woff2'),
		url(${GmarketSansMediumWoff}) format('woff'),
		url(${GmarketSansMediumTtf}) format('truetype');
		font-weight: 500;
		font-style: normal;
	}
	@font-face {
		font-family: 'GmarketSans';
		src: local(☺),
		url(${GmarketSansLightWoff2}) format('woff2'),
		url(${GmarketSansLightWoff}) format('woff'),
		url(${GmarketSansLightTtf}) format('truetype');
		font-weight: 350;
		font-style: normal;
	}
`;
