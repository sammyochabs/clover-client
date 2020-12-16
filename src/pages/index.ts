import loadable from '@loadable/component';

export const Root = loadable(() => import('./Root'));
export const Login = loadable(() => import('./Login'));
export const Join = loadable(() => import('./Join'));

export const JoinAdditionalInfo = loadable(() => import('./JoinAdditionalInfo'));
export const JoinAgreement = loadable(() => import('./JoinAgreement'));
export const JoinComplete = loadable(() => import('./JoinComplete'));

export const MoimList = loadable(() => import('./MoimList'));
export const MoimListRegional = loadable(() => import('./MoimListRegional'));
export const MoimListDate = loadable(() => import('./MoimListDate'));
export const MypageLiked = loadable(() => import('./Mypage/MypageLiked'));
export const MypageList = loadable(() => import('./Mypage/MypageList'));
export const MypageComment = loadable(() => import('./Mypage/MypageComment'));
export const MypageInfo = loadable(() => import('./Mypage/MypageInfo'));
export const MypagePoint = loadable(() => import('./Mypage/MypagePoint'));
export const MypageQuestion = loadable(() => import('./Mypage/MypageQuestion'));

export const HelpCenterNotice = loadable(
  () => import('./HelpCenter/HelpCenterNotice'),
);

export const HelpCenterFAQ = loadable(
  () => import('./HelpCenter/HelpCenterFAQ'),
);

export const HelpCenterAsk = loadable(
  () => import('./HelpCenter/HelpCenterAsk'),
);

export const HelpCenterAskForm = loadable(
  () => import('./HelpCenter/HelpCenterAskForm'),
);
export const HelpCenterContact = loadable(
  () => import('./HelpCenter/HelpCenterContact'),
);
export const HelpCenterPrivacy = loadable(
  () => import('./HelpCenter/HelpCenterPrivacy'),
);

export const HelpCenterAgreement = loadable(
  () => import('./HelpCenter/HelpCenterAgreement'),
);

export const MoimDetail = loadable(() => import('./MoimDetail'));
