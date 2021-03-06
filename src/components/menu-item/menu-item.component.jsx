import React from 'react';

import { Content } from '../content/content.component';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div style={{ 
                backgroundImage: `url(${imageUrl})`
             }} className="background-image" />
            <Content title={ title } />
        </div>
    );
};

export default withRouter(MenuItem);