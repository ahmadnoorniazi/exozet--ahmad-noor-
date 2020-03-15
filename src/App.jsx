import React, { lazy, Suspense } from 'react'
import '../public/scss/main.scss'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundries'

const InputBar = lazy(() => import('./layouts/InputBar'))
const ResumeDetails = lazy(() => import('./layouts/ResumeDetail'))

function App () {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div id='wrapper'>
        <Router>
          <ErrorBoundary>
            <Switch>
              <Route exact path='/' component={InputBar} />
              <Route
                path='/:name'
                component={props => (
                  <ResumeDetails name={props.match.params.name} />
                )}
              />
            </Switch>
          </ErrorBoundary>
        </Router>
      </div>
    </Suspense>
  )
}

export default App
