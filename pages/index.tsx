import Link from 'next/link';
import Layout from '../components/Layout';

import features from '../src/features';
import Settings from '../components/Settings';

const IndexPage = () => (
  <Layout title={`${Settings.ProjectName}`}>
    <div id='Index'>
      <h1>フラクタル図形描写サイト</h1>
      <p>
        キレイなフラクタル図形を描写するサイトです。
      </p>
      <div>
        {
          features.map((feature, _) => {
            return (
              <Link key={feature.name} href={feature ? `/${feature.id}` : '/'}>
                <p>{feature.name}</p>
                <img src={`/${feature.id}`} alt={feature.name} />
              </Link>
            )
          })
        }
      </div>
    </div>
  </Layout>
)

export default IndexPage
