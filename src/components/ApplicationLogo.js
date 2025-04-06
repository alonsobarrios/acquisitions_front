const ApplicationLogo = props => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 750 150" {...props}>
        <path fill="gray" fillOpacity=".2" d="M136.3 18.7c1.5.2 3.9.2 5.5 0 1.5-.2.2-.4-2.8-.4s-4.3.2-2.7.4"/><path fill="gray" fillOpacity=".4" d="M129.8 18.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5m15 0c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5m229.6 39.8c0 11 .2 15.6.3 10.3.2-5.3.2-14.3 0-20-.1-5.7-.3-1.3-.3 9.7M585.5 69c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2M242.4 99.5c0 6.6.1 9.2.3 5.7.2-3.4.2-8.8 0-12-.2-3.1-.3-.3-.3 6.3m132-.2c-.2.7-.3 8-.2 16.2l.3 15 .5-16.3c.3-8.9.4-16.2.2-16.2-.1 0-.5.6-.8 1.3m137.9 11.4c2.6.2 6.7.2 9 0s.2-.3-4.8-.3c-4.9 0-6.8.1-4.2.3"/><path fill="gray" fillOpacity=".3" d="M351.5 75c0 30.5.1 43 .2 27.7.2-15.2.2-40.2 0-55.5-.1-15.2-.2-2.7-.2 27.8m227.6-24.4c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m-454.9 56.1c7 .2 18.7.2 26 0 7.3-.1 1.6-.3-12.7-.3s-20.3.2-13.3.3m406.6 4c3.4.2 8.8.2 12 0 3.1-.2.3-.3-6.3-.3s-9.2.1-5.7.3"/><path fill="#BFBFBF" fillOpacity=".1" d="M218.4 41.5c0 12.1.2 16.9.3 10.7.2-6.2.2-16.1 0-22-.1-5.9-.3-.8-.3 11.3M430 27.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3M245.3 38.7c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5m21 0c.9.2 2.5.2 3.5 0 .9-.3.1-.5-1.8-.5s-2.7.2-1.7.5m119.5 0c3.4.2 8.8.2 12 0 3.1-.2.3-.3-6.3-.3s-9.2.1-5.7.3m230.5 0c1.5.2 3.9.2 5.5 0 1.5-.2.2-.4-2.8-.4s-4.3.2-2.7.4M530.4 75c0 6.3.1 8.9.3 5.7.2-3.1.2-8.3 0-11.5-.2-3.1-.3-.5-.3 5.8m-229.3-4.4c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3M218.4 109c0 11.8.2 16.7.3 10.8.2-6 .2-15.6 0-21.5-.1-6-.3-1.1-.3 10.7m435 9.2-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9"/><path fill="#404040" fillOpacity=".7" d="M223.3 19.7c2 .2 5.4.2 7.5 0 2-.2.3-.4-3.8-.4s-5.8.2-3.7.4m43.5 0c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5m98.5 0c7.1.2 18.3.2 25 0 6.7-.1 1-.3-12.8-.3-13.7 0-19.2.2-12.2.3M416 42.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m244.1 53.2c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m0 5c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m-414.8 12.1c1.5.2 3.7.2 5 0 1.2-.2 0-.4-2.8-.4-2.7 0-3.8.2-2.2.4m17 0c.9.2 2.5.2 3.5 0 .9-.3.1-.5-1.8-.5s-2.7.2-1.7.5m-181.5 17c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m110 0c1.2.2 3 .2 4 0 .9-.3-.1-.5-2.3-.4-2.2 0-3 .2-1.7.4m76 1c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m91.5 0c3.2.2 8.1.2 11 0s.3-.3-5.8-.3c-6 0-8.4.1-5.2.3m75.5 0c2.3.2 5.9.2 8 0 2-.2.1-.4-4.3-.4s-6.1.2-3.7.4"/><path fill="#000040" d="M128 20c-.4.3-3.7 7.2-7.3 15.5-5.2 12.1-22.8 52.2-26.6 61-.5 1.1-1.8 4-2.9 6.5s-3.2 7.2-4.7 10.4c-3.4 7.5-6.5 14.6-6.5 15.2 0 .2 4.5.4 9.9.4 6.9 0 10.2-.4 10.8-1.2.4-.7 2.6-5.8 4.9-11.3l4-10 28-.3 27.9-.2 4.8 11.5 4.9 11.5h10.4c5.7 0 10.4-.3 10.4-.6 0-.5-11.6-27.5-23.5-54.9-.7-1.7-5.9-13.4-11.4-26.1-5.6-12.7-10.1-23.6-10.1-24.1 0-2.7-3.4-3.7-12.7-3.7-5.2-.1-9.8.1-10.3.4m14.6 31c1.9 4.7 4.2 9.9 5 11.7.7 1.7 1.4 3.4 1.4 3.8 0 .3.8 2.5 1.9 4.8 4.9 11.1 6.1 14.1 6.1 15.8 0 1.8-1.1 1.9-19.5 1.9-12.4 0-19.5-.4-19.5-1s2.5-7 5.6-14.3c3-7.2 7.2-17.4 9.2-22.4 2.3-5.8 4.2-9.2 5-9 .8.1 2.9 4 4.8 8.7m77.4-9.5V63h21.9l.3-12.8.3-12.7 11.5-.3c19.3-.5 29.6 2.3 37.7 10.4 18.3 18.4 13.1 51.6-9.8 61.9-5.7 2.5-7.4 2.8-23 3.3l-16.9.5V88h-22v42.1l29.8-.3c27.4-.3 30.2-.5 36-2.5 12.9-4.6 23.8-13.2 30.1-24.2 5.4-9.2 7.1-16 7.1-27.8 0-17-4.3-27.7-15.4-38.9-7.6-7.7-13.2-11-24-14.3-6.3-1.9-9.1-2.1-35.2-2.1H220zm132.7-20.8c-.4.3-.7 25.1-.7 55V130h22V98h28.9l7.1 12.2c4 6.8 8.3 14 9.6 16.1l2.4 3.7h11c6.1 0 11-.2 11-.4s-5.2-8.1-11.5-17.6-11.5-17.5-11.4-17.9c0-.3 2.8-2.4 6.2-4.6 7.3-4.8 11-9.7 13.7-18.6 5.1-16.7-.1-34.4-12.5-43.1-2.2-1.5-7.5-3.9-11.8-5.3-7.6-2.4-8.6-2.5-35.6-2.5-15.3 0-28.1.3-28.4.7m58.8 18.7c8.7 3.7 13.1 11.3 12.3 21.1-.6 7.5-4.5 13.1-11.7 16.7-5.3 2.7-6 2.8-21.8 2.8H374V36.7l16.8.5c12.4.4 17.7 1 20.7 2.2M484 29.3v9.3l30.5.3 30.5.2V20h-61zm118-6.7c-8.8 3.2-13.6 6.9-17.7 13.6-3.3 5.3-3.5 6.2-3.5 14-.1 9.5 1.2 13 7.1 19.1 4.3 4.6 8.1 6.3 27.5 12.8 8.1 2.7 16.4 6.1 18.2 7.5 5.8 4.5 6.6 12.3 1.7 17.5-3.6 3.9-8.8 5.2-19 4.7-7.6-.3-10-.9-16.4-4-4.2-1.9-9.9-5.2-12.8-7.2-2.9-2.1-5.4-3.6-5.5-3.4s-1.5 3-3.1 6.3c-1.5 3.3-3.2 6.8-3.7 7.7-.7 1.4.1 2.5 3.9 5.2 18.7 13.8 43.8 17.4 62.9 9.1 10.7-4.7 17.1-13.1 18.1-23.7.9-10.2-.9-15.9-7.1-22.3-6.1-6.1-9.5-7.8-28.7-14.2-11.6-3.8-14.9-5.3-18-8.3-3.2-3.1-3.9-4.4-3.9-7.6 0-7.8 5.5-11.8 16.5-11.8 7.6 0 18.5 2.9 26.7 7 2.6 1.3 5 2.4 5.3 2.4.2 0 2.3-3.6 4.5-7.9 3-6 3.6-8.2 2.7-8.9-2.7-2.2-10.5-5.5-18-7.8-11.4-3.4-28.3-3.3-37.7.2m-118 98.1v9.3h63v-18l-11.7-.2c-6.5-.2-20.7-.3-31.5-.3H484z"/><path fill="#004040" d="M135.8 19.7c1.8.2 4.5.2 6 0s0-.4-3.3-.4-4.5.2-2.7.4m260.5 18c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5m88.9 1.5c-.9.4 3.7.7 10.2.7 6.6.1 11.6-.2 11.2-.6-.9-.9-19.1-1-21.4-.1M323.3 75.5c0 3.3.2 4.5.4 2.7s.2-4.5 0-6-.4 0-.4 3.3m167 36.2c3.2.2 8.1.2 11 0s.3-.3-5.8-.3c-6 0-8.4.1-5.2.3m39.5 0c3.4.2 8.8.2 12 0 3.1-.2.3-.3-6.3-.3s-9.2.1-5.7.3"/><path fill="#004040" fillOpacity=".9" d="M500.8 130.7c8.3.2 22.1.2 30.5 0 8.3-.1 1.5-.3-15.3-.3s-23.6.2-15.2.3"/><path fill="#404080" fillOpacity=".5" d="M461.8 63.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m-208 49c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5"/><path fill="#404040" fillOpacity=".6" d="M222.8 87.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m-94.6 1c4.8.2 12.9.2 18 0 5.1-.1 1.2-.3-8.7-.3s-14.1.2-9.3.3"/><path fill="#404040" fillOpacity=".8" d="M234.8 19.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m24.5 0c1.5.2 3.7.2 5 0 1.2-.2 0-.4-2.8-.4-2.7 0-3.8.2-2.2.4m357.5 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m5 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6M309 37.5c1.3 1.4 2.6 2.5 2.8 2.5.3 0-.5-1.1-1.8-2.5s-2.6-2.5-2.8-2.5c-.3 0 .5 1.1 1.8 2.5m209.2 2.2c4.8.2 12.9.2 18 0 5.1-.1 1.2-.3-8.7-.3s-14.1.2-9.3.3m-292.9 24c3.1.2 8.3.2 11.5 0 3.1-.2.5-.3-5.8-.3s-8.9.1-5.7.3m155.9 16c3.7.2 10 .2 14 0 4-.1 1-.3-6.7-.3s-11 .1-7.3.3M547.4 121c0 5.2.1 7.4.3 4.7.2-2.6.2-6.8 0-9.5-.2-2.6-.3-.4-.3 4.8m103.5-1.3c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m-419.6 11c6.4.2 17 .2 23.5 0 6.4-.1 1.1-.3-11.8-.3s-18.2.2-11.7.3m193.5 0c1.2.2 3 .2 4 0 .9-.3-.1-.5-2.3-.4-2.2 0-3 .2-1.7.4"/><path fill="#404040" d="M241.8 19.7c2.8.2 7.6.2 10.5 0 2.8-.2.5-.3-5.3-.3s-8.1.1-5.2.3m272.4 0 30.7.3.4 9.5.3 9.5v-9.7l-.1-9.8h-62zM219.4 41.5c0 12.1.2 16.9.3 10.7.2-6.2.2-16.1 0-22-.1-5.9-.3-.8-.3 11.3m264-12c0 4.9.1 7.1.3 4.8s.2-6.4 0-9-.3-.8-.3 4.2m-234.1 8.2c3.7.2 9.7.2 13.5 0 3.7-.2.6-.3-6.8-.3s-10.5.1-6.7.3m130.5 0c2.8.2 7.6.2 10.5 0 2.8-.2.5-.3-5.3-.3s-8.1.1-5.2.3m237 0c1.2.2 3 .2 4 0 .9-.3-.1-.5-2.3-.4-2.2 0-3 .2-1.7.4M302.3 75c0 3 .2 4.3.4 2.7.2-1.5.2-3.9 0-5.5-.2-1.5-.4-.2-.4 2.8m100.5 4.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6M219.4 109c0 11.8.2 16.7.3 10.8.2-6 .2-15.6 0-21.5-.1-6-.3-1.1-.3 10.7m264 11c0 5.2.1 7.4.3 4.7.2-2.6.2-6.8 0-9.5-.2-2.6-.3-.4-.3 4.8"/><path fill="#404080" fillOpacity=".6" d="M242.4 51c0 6.9.1 9.7.3 6.2.2-3.4.2-9 0-12.5-.2-3.4-.3-.6-.3 6.3m223.9 35.7c3.2.2 8.1.2 11 0s.3-.3-5.8-.3c-6 0-8.4.1-5.2.3m47 0c3.2.2 8.1.2 11 0s.3-.3-5.8-.3c-6 0-8.4.1-5.2.3m-284.5 1c2.3.2 5.9.2 8 0 2-.2.1-.4-4.3-.4s-6.1.2-3.7.4m389 43c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6"/><path fill="#8080BF" fillOpacity=".2" d="M324.2 75c0 1.9.2 2.7.5 1.7.2-.9.2-2.5 0-3.5-.3-.9-.5-.1-.5 1.8m59.1 23.7c3.1.2 8.3.2 11.5 0 3.1-.2.5-.3-5.8-.3s-8.9.1-5.7.3"/><path fill="#408080" fillOpacity=".5" d="M468.3 63.7c2.6.2 6.8.2 9.5 0 2.6-.2.4-.3-4.8-.3s-7.4.1-4.7.3m46 0c2.6.2 6.7.2 9 0s.2-.3-4.8-.3c-4.9 0-6.8.1-4.2.3m-256.5 49c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6"/><path fill="#40BF80" fillOpacity=".7" d="M506.1 42.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m.3 11.4c0 5.2.1 7.4.3 4.7.2-2.6.2-6.8 0-9.5-.2-2.6-.3-.4-.3 4.8m0 45c0 6.3.1 8.9.3 5.7.2-3.1.2-8.3 0-11.5-.2-3.1-.3-.5-.3 5.8"/><path fill="#00BF80" d="M483.8 50.5c-.2 5.8-.1 11 0 11.5.2.6 5.1 1 11.3 1H506V40h-21.9zm.2 48V110h22V87h-22z"/><path fill="#40BF80" d="M483.4 50.5c0 5.5.1 7.6.3 4.7s.2-7.4 0-10-.3-.2-.3 5.3m0 48.5c0 6.3.1 8.9.3 5.7.2-3.1.2-8.3 0-11.5-.2-3.1-.3-.5-.3 5.8"/><path fill="#404080" d="M460 75v11h22.5v-6.3c0-3.4-.2-8.3-.3-11L482 64h-22zm47 0v11h23V64h-23z"/><path fill="#404080" fillOpacity=".7" d="M86.3 129.7c2 .2 5.4.2 7.5 0 2-.2.3-.4-3.8-.4s-5.8.2-3.7.4m92.4 0c1.8.2 5 .2 7 0 2.1-.2.7-.4-3.2-.4-3.8 0-5.5.2-3.8.4"/><path fill="#40BFBF" d="M483 75.2v12.3l12-.3c7.4-.2 11.8-.7 11.4-1.3-.3-.5-1.5-.9-2.7-.8s-4.5.1-7.4.1c-6.7-.2-8.4-1.9-8.1-8l.1-4.7.4 4.5c.6 6.5 1.5 7.2 9.2 6.8l6.6-.3.3-9.5c.2-6 .7-9.7 1.5-10.2.7-.4-4.3-.8-11-.8H483zm1.7 4.5c-.2 3.2-.3.8-.3-5.2 0-6.1.1-8.7.3-5.8s.2 7.8 0 11"/><path fill="#8080BF" fillOpacity=".4" d="M459.4 74c0 5.8.1 8.1.3 5.2.2-2.8.2-7.6 0-10.5-.2-2.8-.3-.5-.3 5.3"/><path fill="#408080" d="M482.3 68.5c0 2.7.2 3.8.4 2.2.2-1.5.2-3.7 0-5-.2-1.2-.4 0-.4 2.8m-.2 15.1c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3"/><path fill="#80BFBF" d="M484.4 74.5c0 6 .1 8.4.3 5.2s.2-8.1 0-11-.3-.3-.3 5.8m20.4-.8-.3 9.8-6.6.3c-7.7.4-8.6-.3-9.2-6.8l-.4-4.5-.1 4.5c-.2 6.4.7 7.3 8 8 10.1 1 9.8 1.4 9.8-10.6 0-5.7-.2-10.4-.5-10.4-.2 0-.6 4.4-.7 9.7"/><path fill="#4080BF" d="M506.4 75c0 6.3.1 8.9.3 5.7.2-3.1.2-8.3 0-11.5-.2-3.1-.3-.5-.3 5.8"/><path fill="teal" d="M490.3 110.7c3.2.2 8.1.2 11 0s.3-.3-5.8-.3c-6 0-8.4.1-5.2.3"/>
    </svg>
)

export default ApplicationLogo
