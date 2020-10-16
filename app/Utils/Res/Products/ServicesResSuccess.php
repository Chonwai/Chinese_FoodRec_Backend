<?php

namespace App\Utils\Res\Products;

use App\Utils\ResponseUtils;
use App\Utils\Res\Products\ServicesResInterface;
use App\Utils\Utils;

class ServicesResSuccess implements ServicesResInterface
{
    private static $_instance = null;

    private function __construct()
    {
        // Avoid constructing this class on the outside.
    }

    private function __clone()
    {
        // Avoid cloning this class on the outside.
    }

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function createServicesRes($data)
    {
        if ($data) {
            return Utils::integradeResponseMessage(ResponseUtils::success(), true, 1);
        } else {
            return Utils::integradeResponseMessage(ResponseUtils::fail(), false, 9000);
        }
    }
}