import {
    BaseMod
} from './base'

class modules extends BaseMod {
    /**
     * @description 格式化日期
     * @param {any} date 时间戳或日期
     * @param {string} type 默认：yyyy-MM-dd hh:mm:ss
     * @returns {any}
     */
    public formatDate(date: any, type: string): any {
        if (arguments.length === 0) return null
        if ((date + '').length === 10) {
            date = Number(date) * 1000
        }
        let format = type || 'yyyy-MM-dd hh:mm:ss',
            tempdate
        if (typeof date === 'object') {
            tempdate = date
        } else {
            tempdate = new Date(date)
        }

        let formatObj: {
            [key: string]: any
        } = {
            yyyy: tempdate.getFullYear(),
            MM: tempdate.getMonth() + 1,
            dd: tempdate.getDate(),
            hh: tempdate.getHours(),
            mm: tempdate.getMinutes(),
            ss: tempdate.getSeconds()
        }
        return format.replace(/(yyyy|MM|dd|hh|mm|ss)+/g, (result, key) => {
            let value = formatObj[key]
            if (result.length > 0 && value < 10) {
                value = '0' + value
            }
            return value || 0
        })

    }
    /**
     * @description 格式化时分秒
     * @param {any} date 时间戳
     * @returns {string}
     */
    public formatTime(time: any): string {
        let temp = ''
        if (time >= 3600) {
            temp = Math.floor(time / 3600) + '小时' + Math.floor(time % 3600 / 60) + '分' + time % 60 + '秒'
        } else if (time >= 60) {
            temp = Math.floor(time / 60) + '分' + time % 60 + '秒'
        } else {
            temp = time % 60 + '秒'
        }
        return temp
    }
    /**
     * @description 获取两个日期间差值
     * @param {*} startDate
     * @param {*} endDate
     * @returns {number}
     */
    public getDayMinus(startDate: any, endDate: any): number {
        return Math.floor((Number(new Date(endDate)) - Number(new Date(startDate))) / (1000 * 60 * 60 * 24));
    }
    /**
     * @description 获取某年有多少天
     * @param {*} year 1999
     * @returns {number}
     */
    public getYearDays(year: any): number {
        let days = 365;
        this.getMonthDays(year + '-2') == 29 ? days = 366 : days
        return days;
    }
    /**
     * @description 获取某年某月有多少天
     * @param {*} date 1999-1
     * @returns {number}
     */
    public getMonthDays(date: any): number {
        let temp = new Date(date)
        let year = temp.getFullYear()
        let month = temp.getMonth()
        return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (super.isLeapYear(year) ? 29 : 28);
    }
    /**
     * @description 获取某年某天是第几周
     * @param {*} date 1999-1-1
     * @returns {number}
     */
    public getWhichWeek(date: any): number {
        let temp = new Date(date),
            year = temp.getFullYear(),
            month = temp.getMonth(),
            days = temp.getDate();
        let yearFirstDay = new Date(year, 0, 1).getDay() || 7;
        let week = null;
        for (let m = 0; m < month; m++) {
            days += this.getMonthDays(year + '-' + m);
        }
        if (yearFirstDay == 1) {
            week = Math.ceil(days / yearFirstDay);
        } else {
            days -= (7 - yearFirstDay + 1);
            week = Math.ceil(days / 7) + 1;
        }
        return week;
    }
    /**
     * @description 获取某日期前后若干天数的日期
     * @param {*} date
     * @param {number} minusDays
     * @returns {string}
     */
    public getDateMinusDaysDate(date: any, minusDays: number): string {
        let temp = new Date(date);
        temp.setDate(Number(new Date(date).getDate()) + minusDays); //获取AddDayCount天后的日期
        let y = temp.getFullYear();
        let m = temp.getMonth() + 1; //获取当前月份的日期
        let d = temp.getDate();
        return y + "-" + m + "-" + d;
    }
}

export {
    modules as DateMod
}