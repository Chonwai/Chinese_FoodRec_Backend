class Utils {
    public static integrateResultList(result: any): object {
        let resultList: Array<any> = [];
        result.records.forEach(function (record: any) {
            resultList.push(record._fields[0].properties);
        });
        return resultList;
    }
}

export default Utils;
