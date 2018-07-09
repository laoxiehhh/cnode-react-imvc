import React from 'react'
import Layout from '../../component/Layout';
import { Input } from 'react-imvc/component'
// Input 是react-imvc封装的组件，用来将表单跟 store 联系起来，写在name属性下
export default function View ({ handlers }) {
  let { handleLogin } = handlers
  return (
    <Layout>
      <section className="page-body">
        <div className="label">
          <Input
            name="token"
            className="txt"
            type="text"
            placeholder="Access Token"
            maxLength="36"
          ></Input>
        </div>
        <div className="label">
          <button className="button" onClick={handleLogin}>
            登录
          </button>
        </div>
      </section>
    </Layout>
  )
}