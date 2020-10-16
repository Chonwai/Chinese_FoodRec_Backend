<?php

namespace App\Utils;

use App\Utils\Res\ResFactoryUtils;

class Utils
{
    public static function integradeResponseMessage($message, $status, $code = 9000)
    {
        $response = [];
        $response['status'] = $status;
        $response['code'] = $code;
        $response['message'] = $message;
        return $response;
    }

    public static function responseMessage($data, $flag)
    {
        return ResFactoryUtils::getServicesRes($data, $flag);
    }
}
