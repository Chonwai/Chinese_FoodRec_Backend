<?php

namespace App\Services;

interface BaseServicesInterface
{
    public function dataValidation($request, $method);
    public function responseAll($operation);
    public function responseSpecify($request, $operation);
    public function insert($request, $operation);
    public function update($request, $operation);
    public function delete($request, $operation);
}
