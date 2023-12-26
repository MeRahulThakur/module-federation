import React from 'react';
import { Link as RouterLink } from "react-router-dom";

var version = process.env.BUILD_DATE;

type ContainerAppProps = {
  AppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
  AppTwo: React.LazyExoticComponent<React.ComponentType<{}>>;
};

const ContainerApp = ({
  AppOne,
  AppTwo,
}: ContainerAppProps) => {
  return (
    <div>
      <span>Version:{version}</span>
      <div>
        <AppOne />
        <RouterLink to="/app1">
          <button type="button">
            App1
          </button>
        </RouterLink>
      </div>
      <div>
        <AppTwo />
        <RouterLink to="/app2">
          <button type="button">
            App2
          </button>
        </RouterLink>
      </div>
    </div>
  )
}

export default ContainerApp