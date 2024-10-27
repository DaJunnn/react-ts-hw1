import './App.css'

function App() {


  return (
    <>

      <header className="header">
        <h1>DAJUN</h1>
        <h2>張蔡大鈞</h2>
        <p>淡江大學資訊管理學系三年C班</p>
      </header>

      <main className="content">
        <img src="個人照.jpg" alt="DAJUN的個人照片" className="profile-pic" />

        <section className="info">
          <h3>自我介紹</h3>
          <h4>學歷</h4>
          <ul>
            <li>國中: 花蓮縣立花崗國民中學</li>
            <li>高中: 國立花蓮高級中學</li>
            <li>大學: 淡江大學</li>
          </ul>

          <h4>興趣</h4>
          <ul>
            <li>騎車</li>
            <li>打電腦</li>
            <li>打籃球</li>
          </ul>
        </section>

        <section className="contact">
          <h4>聯絡方式</h4>
          <table>
            <thead>
              <tr>
                <th>App</th>
                <th>帳號</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Line</td>
                <td><a href="https://line.me/tw/">Dajun0306</a></td>
              </tr>
              <tr>
                <td>Instagram</td>
                <td><a href="https://www.instagram.com/?hl=zh-">junn_0306</a></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

        </>
        )
}

        export default App
