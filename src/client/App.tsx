import { LoadableComponent } from '@loadable/component';
import React, {
  ComponentClass,
  ReactComponentElement,
  ReactElement,
} from 'react';
import { Route, Switch } from 'react-router';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { gql } from '@apollo/client';
import {
  Login,
  Root,
  Join,
  MoimList,
  MoimListRegional,
  MoimListDate,
  MypageLiked,
  MypageList,
  MypageComment,
  MypageInfo,
  MypagePoint,
  HelpCenterNotice,
  HelpCenterFAQ,
  HelpCenterAsk,
  HelpCenterAskForm,
  HelpCenterContact,
  HelpCenterPrivacy,
  HelpCenterAgreement,
  MoimDetail,
  JoinAdditionalInfo,
  JoinAgreement,
  JoinComplete,
} from '../pages';
import MypageQuestion from '../pages/Mypage/MypageQuestion';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';
import { ApolloProvider } from '@apollo/client';
const Container = styled.div`
  width: 100%;
  ${isMobile
    ? `
    
  `
    : `
    min-width: 1440px;
  `}
`;

const client = new ApolloClient({
  uri: 'https://dev-clover-server.azurewebsites.net/graphql',
  cache: new InMemoryCache(),
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={withMainWrapper(Root)} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/join/info" component={JoinAdditionalInfo} />

          <Route exact path="/join/agreement" component={JoinAgreement} />

          <Route exact path="/join/complete" component={JoinComplete} />

          <Route
            exact
            path="/moim/list"
            component={withMainWrapper(MoimList)}
          />
          <Route
            exact
            path="/moim/list/regional"
            component={withMainWrapper(MoimListRegional)}
          />
          <Route
            exact
            path="/moim/:id"
            component={withMainWrapper(MoimDetail)}
          />
          <Route
            exact
            path="/moim/list/date"
            component={withMainWrapper(MoimListDate)}
          />
          <Route
            exact
            path="/mypage/list"
            component={withMainWrapper(MypageList)}
          />
          <Route
            exact
            path="/mypage/liked"
            component={withMainWrapper(MypageLiked)}
          />
          <Route
            exact
            path="/mypage/comment"
            component={withMainWrapper(MypageComment)}
          />
          <Route
            exact
            path="/mypage/info"
            component={withMainWrapper(MypageInfo)}
          />
          <Route
            exact
            path="/mypage/point"
            component={withMainWrapper(MypagePoint)}
          />
          <Route
            exact
            path="/mypage/question"
            component={withMainWrapper(MypageQuestion)}
          />
          <Route
            exact
            path="/helpcenter/notice"
            component={withMainWrapper(HelpCenterNotice)}
          />
          <Route
            exact
            path="/helpcenter/faq"
            component={withMainWrapper(HelpCenterFAQ)}
          />
          <Route
            exact
            path="/helpcenter/ask"
            component={withMainWrapper(HelpCenterAsk)}
          />
          <Route
            exact
            path="/helpcenter/ask/form"
            component={withMainWrapper(HelpCenterAskForm)}
          />
          <Route
            exact
            path="/helpcenter/contact"
            component={withMainWrapper(HelpCenterContact)}
          />
          <Route
            exact
            path="/helpcenter/privacy"
            component={withMainWrapper(HelpCenterPrivacy)}
          />
          <Route
            exact
            path="/helpcenter/agreement"
            component={withMainWrapper(HelpCenterAgreement)}
          />
        </Switch>
      </BrowserRouter>
    </Container>
  </ApolloProvider>
);

const withMainWrapper = (Component: any) => {
  return () => (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
};

export default App;
