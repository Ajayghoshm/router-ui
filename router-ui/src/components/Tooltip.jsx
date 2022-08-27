import ReactTooltip from 'react-tooltip';

export const Tooltip = ({data}) => {
    return (
        <>
            <div data-tip={data} className='w-32 overflow-hidden text-ellipsis'> {data} </div>
            <ReactTooltip place="top" type="dark" effect="float" />
        </>
    )
}