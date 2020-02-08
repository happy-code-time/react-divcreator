export const logBuildTime = (buildTimeStart, type) => {
    const buildTimeEnd = Date.now()-buildTimeStart;

    console.info(`%c React-divcreator (component: ${type.toUpperCase()}) %c Build time: ${buildTimeEnd}ms`, 
        'font-family: Arial, Times, serif; font-size: 16px; color:#00BCD4; background-color: #11112D',
    );
}