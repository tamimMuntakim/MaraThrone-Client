import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./CountDown.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const CountDown = ({ endTime }) => {
    const startTime = Date.now() / 1000;

    const endTimestamp = typeof endTime === "string"
        ? new Date(endTime).getTime() / 1000
        : endTime;

    const remainingTime = endTimestamp - startTime;
    const days = Math.floor(remainingTime / daySeconds);


    const daysDuration = days * daySeconds;

    return (
        <div className="App flex flex-col lg:flex-row items-center justify-between">
            <div className="flex justify-center items-center gap-1">
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#7E2E84"
                    duration={daysDuration}
                    initialRemainingTime={remainingTime}
                >
                    {({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                        </span>
                    )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#D14081"
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
                    })}
                >
                    {({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                        </span>
                    )}
                </CountdownCircleTimer>
            </div>

            <div className="flex justify-center items-center gap-1">
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#EF798A"
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
                    })}
                >
                    {({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
                        </span>
                    )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#218380"
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > 0,
                    })}
                >
                    {({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime("seconds", getTimeSeconds(elapsedTime))}
                        </span>
                    )}
                </CountdownCircleTimer>
            </div>
        </div>
    );
};

export default CountDown;
