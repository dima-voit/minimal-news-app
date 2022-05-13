import React from "react";
import { Layout } from "../../components/layout/Layout";

export class Pageone extends React.Component {

  render () {
    return (
      <Layout>
        <h1>This day in history</h1>
        <form>
          <input/>
          <input/>
          <textarea></textarea>
          <button>Add date</button>
        </form>
      </Layout>
    )
  }
}
