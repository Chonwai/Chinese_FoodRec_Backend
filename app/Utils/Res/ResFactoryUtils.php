<?php

namespace App\Utils\Res;

use App\Utils\Res\Products\ServicesResFail;
use App\Utils\Res\Products\ServicesResNotEnoughCredict;
use App\Utils\Res\Products\ServicesResPasswordIncorrect;
use App\Utils\Res\Products\ServicesResSuccess;
use App\Utils\Res\Products\ServicesResSuccessAndResponseData;
use App\Utils\Res\Products\ServicesResTokenExpired;
use App\Utils\Res\Products\ServicesResUnknownProblems;
use App\Utils\Res\Products\ServicesResUserUpdateFailed;
use App\Utils\Res\ResAbstractFactory;

class ResFactoryUtils extends ResAbstractFactory
{
    public static function getServicesRes($data, $type)
    {
        $res = null;

        switch ($type) {
            case 'successAndShowData':
                $res = ServicesResSuccessAndResponseData::getInstance()->createServicesRes($data);
                break;
            case 'success':
                $res = ServicesResSuccess::getInstance()->createServicesRes($data);
                break;
            case 'fail':
                $res = ServicesResFail::getInstance()->createServicesRes($data);
                break;
            case 'unknownProblems':
                $res = ServicesResUnknownProblems::getInstance()->createServicesRes($data);
                break;
            case 'notEnoughCredit':
                $res = ServicesResNotEnoughCredict::getInstance()->createServicesRes($data);
                break;
            case 'tokenExpired':
                $res = ServicesResTokenExpired::getInstance()->createServicesRes($data);
                break;
            case 'passwordIncorrect':
                $res = ServicesResPasswordIncorrect::getInstance()->createServicesRes($data);
                break;
            case 'wrongConfirmationCode':
                $res = ServicesResPasswordIncorrect::getInstance()->createServicesRes($data);
                break;
            case 'userUpdateFailed':
                $res = ServicesResUserUpdateFailed::getInstance()->createServicesRes($data);
                break;
            default:
                # code...
                break;
        }

        return $res;
    }
}
