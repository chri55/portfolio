import React, { Component } from 'react';
import { Link } from 'gatsby';
import MainLayout from '../layout/MainLayout';
import BottomNavigation from '../components/BottomNavigation/BottomNavigation';

class TestPage extends Component {
  render (){
    return (
      <MainLayout>
        <BottomNavigation></BottomNavigation>
      </MainLayout>
    );
  };
}

export default TestPage;
