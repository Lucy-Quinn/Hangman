import React from 'react';
import { PointsContainer, PointsLeft } from './Points.styled';

const Points = ({ points }) => {
    return (
        <PointsContainer>
            <PointsLeft>{points}</PointsLeft>
        </PointsContainer>

    );
}

export default Points;