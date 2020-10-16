<?php

namespace App\Services;

interface BaseServicesInterface
{
    public function dataValidation($request, $method);
    public function responseAll();
    public function responseSpecify($request);
    public function insert($request);
    public function update($request);
    public function delete($request);
}
