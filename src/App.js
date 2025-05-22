import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Testing for uploading to GitHub.<br />
        <p>
          steps: (reference: https://www.youtube.com/watch?v=7wzuievFjrk&ab_channel=CodeWithAjesh)
        </p>
        <ul style={{ textAlign: "left" }}>
          <li>npm install gh-pages --save-dev</li>
          <li>go to github create a repository</li>
          <li>git init</li>
          <li>git add README.md</li>
          <li>git commit -m "first commit"</li>
          <li>git branch -M main</li>
          <li>git remote add origin https://github.com/&lt;username&gt;/&lt;repo-name&gt;.git</li>
          <li>git push -u origin main</li>
          <li>add <code>"homepage": "https://&lt;username&gt;.github.io/&lt;repo-name&gt;/"</code> to package.json</li>
          <li>add <code>"predeploy": "npm run build", "deploy": "gh-pages -d build"</code> to scripts in package.json</li>
          <li>npm run deploy</li>
          <li><code>"https://&lt;username&gt;.github.io/&lt;repo-name&gt;/"</code> should be ok to visit now</li>
          
        </ul>
      </header>
    </div>
  );
}

export default App;
