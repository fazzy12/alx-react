import React from 'react';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom';
import BodySection from './BodySection';


const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className="bodySectionWithMargin">
          <BodySection title={title}>{children}</BodySection>
    </div>
  );
};

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BodySectionWithMarginBottom;
