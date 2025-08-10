export default function PreloaderCursor() {
    return (
        <>
            {/* Start Preloader  */}
            <div id="preloader">
                <div id="ed-preloader" className="ed-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                    </div>
                </div>
            </div>
            {/* End Preloader */}

            {/* Custom Cursor Start */}
            <div id="ed-mouse">
                <div id="cursor-ball"></div>
            </div>
            {/* Custom Cursor End */}
        </>
    );
}
