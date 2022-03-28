import React from 'react'
// style
import style from './Pagination.module.scss'

const Pagination = (props) => {
    return (
        <div className={style.paginationGroup}>
            {props.pages.map(page => (
                <button key={page} className={props.currentPage === page ? 'primaryBtn' : 'outlineBtn'}
                        onClick={() => {props.onPageChanged(page)}}>{page}</button>
            ))}
        </div>
    )
}

export default Pagination
