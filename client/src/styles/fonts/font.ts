import { createGlobalStyle } from 'styled-components';

import NotoSansKRBoldWoff from './GmarketSansBold.woff';
import NotoSansKRBoldWoff2 from './GmarketSansBold.woff2';
import NotoSansKRBoldTtf from './GmarketSansBold.ttf';
import NotoSansKRMediumWoff from './GmarketSansMedium.woff';
import NotoSansKRMediumWoff2 from './GmarketSansMedium.woff2';
import NotoSansKRMediumTtf from './GmarketSansMedium.ttf';
import NotoSansKRLightWoff from './GmarketSansLight.woff';
import NotoSansKRLightWoff2 from './GmarketSansLight.woff2';
import NotoSansKRLightTtf from './GmarketSansLight.ttf';

export default createGlobalStyle`
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${NotoSansKRBoldWoff2}) format('woff2'),
		url(${NotoSansKRBoldWoff}) format('woff'),
		url(${NotoSansKRBoldTtf}) format('opentype');
		font-weight: 700;
		font-style: normal;
	}
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${NotoSansKRMediumWoff2}) format('woff2'),
		url(${NotoSansKRMediumWoff}) format('woff'),
		url(${NotoSansKRMediumTtf}) format('opentype');
		font-weight: 500;
		font-style: normal;
	}
	@font-face {
		font-family: 'Noto Sans CJK KR';
		src: local(☺),
		url(${NotoSansKRLightWoff2}) format('woff2'),
		url(${NotoSansKRLightWoff}) format('woff'),
		url(${NotoSansKRLightTtf}) format('opentype');
		font-weight: 350;
		font-style: normal;
	}
`;
