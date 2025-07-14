import "./PageName.css"
import React, {Component} from 'react'
import {motion} from 'framer-motion'

class PageName extends Component {
    render() {
        return (
            <div className="page_body">
                <div className="page">
                    <div className="page_heading">
                        <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {this.props.page_heading}</motion.h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageName