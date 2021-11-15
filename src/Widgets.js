import React from 'react';
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import { Timeline } from 'react-twitter-widgets'

function widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"/>
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets_widgetContainer">
                <h2>Whats happening</h2>
                <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'elonmusk'
                }}
                options={{
                    height: '1000'
                }}
                />
            </div>
        </div>
    )
}

export default widgets
