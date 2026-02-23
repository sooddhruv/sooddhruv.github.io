/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portfolio } from './Portfolio';
import { Resume } from './Resume';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

